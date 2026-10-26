'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const { once } = require('node:events');
const { spawnSync } = require('node:child_process');
const { createServer } = require('./serve.cjs');

const projectRoot = path.resolve(__dirname, '..');
const distRoot = path.join(projectRoot, 'dist');
const serverScript = path.join(__dirname, 'serve.cjs');

function request(port, requestPath, method = 'GET') {
  return new Promise((resolve, reject) => {
    const outgoing = http.request({ hostname: '127.0.0.1', port, path: requestPath, method }, response => {
      const chunks = [];
      response.on('data', chunk => chunks.push(chunk));
      response.on('end', () => resolve({ status: response.statusCode, headers: response.headers, body: Buffer.concat(chunks) }));
      response.on('error', reject);
    });
    outgoing.on('error', reject);
    outgoing.setTimeout(5000, () => outgoing.destroy(new Error('HTTP test timed out')));
    outgoing.end();
  });
}

async function main() {
  const imported = spawnSync(process.execPath, ['-e', `require(${JSON.stringify(serverScript)})`], { timeout: 3000, encoding: 'utf8' });
  assert.equal(imported.status, 0, `Import must not start a server: ${imported.stderr}`);

  const cliEnv = { ...process.env, PORT: '3000', HOST: '127.0.0.1' };
  for (const args of [['--port=abc'], ['--port=0'], ['--port=65536'], ['--host=bad host'], ['--port'], ['--unknown'], ['--port=3000', '--port=3001']]) {
    const result = spawnSync(process.execPath, [serverScript, ...args], { env: cliEnv, timeout: 3000, encoding: 'utf8' });
    assert.equal(result.status, 1, `Invalid CLI arguments must fail: ${args.join(' ')}`);
    assert(result.stderr.trim(), 'Invalid arguments explain the problem');
  }
  const invalidEnv = spawnSync(process.execPath, [serverScript], { env: { ...cliEnv, PORT: 'invalid' }, timeout: 3000, encoding: 'utf8' });
  assert.equal(invalidEnv.status, 1, 'Invalid PORT environment value must fail');
  const help = spawnSync(process.execPath, [serverScript, '--help'], { timeout: 3000, encoding: 'utf8' });
  assert.equal(help.status, 0);
  assert.match(help.stdout, /Usage:/);

  const server = createServer();
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const port = server.address().port;
  const uniqueName = `phenix-http-${process.pid}-${Date.now()}.txt`;
  const outsideFile = path.join(os.tmpdir(), uniqueName);
  const symlinkPath = path.join(distRoot, uniqueName);
  let symlinkCreated = false;
  let outsideCreated = false;

  try {
    const index = await request(port, '/');
    assert.equal(index.status, 200);
    assert.match(index.headers['content-type'], /^text\/html; charset=utf-8$/);
    assert.equal(index.headers['cache-control'], 'no-cache');
    assert.equal(index.headers['x-content-type-options'], 'nosniff');
    assert.deepEqual(index.body, await fs.readFile(path.join(distRoot, 'index.html')));
    assert.equal(Number(index.headers['content-length']), index.body.length);

    const explicitIndex = await request(port, '/index.html?source=test');
    assert.equal(explicitIndex.status, 200);
    assert.deepEqual(explicitIndex.body, index.body);

    const javascript = await request(port, '/app.js');
    assert.equal(javascript.status, 200);
    assert.match(javascript.headers['content-type'], /^text\/javascript; charset=utf-8$/);
    assert.equal(javascript.headers['cache-control'], 'public, max-age=300');
    assert.deepEqual(javascript.body, await fs.readFile(path.join(distRoot, 'app.js')));

    const css = await request(port, '/style.css');
    assert.equal(css.status, 200);
    assert.match(css.headers['content-type'], /^text\/css; charset=utf-8$/);

    const head = await request(port, '/', 'HEAD');
    assert.equal(head.status, 200);
    assert.equal(head.body.length, 0);
    assert.equal(head.headers['content-length'], index.headers['content-length']);
    assert.equal(head.headers['content-type'], index.headers['content-type']);

    for (const requestPath of ['/missing-file', '/package.json', '/scripts/serve.cjs', '/.env', '/.openai/metadata.json']) {
      const missing = await request(port, requestPath);
      assert.equal(missing.status, 404, requestPath);
      assert.equal(missing.headers['x-content-type-options'], 'nosniff');
      assert.equal(missing.headers['cache-control'], 'no-store');
    }
    const missingHead = await request(port, '/missing-file', 'HEAD');
    assert.equal(missingHead.status, 404);
    assert.equal(missingHead.body.length, 0);

    for (const method of ['POST', 'PUT', 'DELETE', 'OPTIONS']) {
      const rejected = await request(port, '/', method);
      assert.equal(rejected.status, 405, method);
      assert.equal(rejected.headers.allow, 'GET, HEAD');
      assert.equal(rejected.headers['x-content-type-options'], 'nosniff');
    }
    for (const requestPath of ['/../package.json', '/%2e%2e/package.json', '/..%5cpackage.json', '/%00', '/%ZZ', '/C:/Windows/win.ini']) {
      const rejected = await request(port, requestPath);
      assert.equal(rejected.status, 400, requestPath);
      assert.equal(rejected.headers['x-content-type-options'], 'nosniff');
    }

    await fs.writeFile(outsideFile, 'This file is outside dist.');
    outsideCreated = true;
    try {
      await fs.symlink(outsideFile, symlinkPath, 'file');
      symlinkCreated = true;
    } catch (error) {
      if (!['EPERM', 'EACCES', 'ENOTSUP', 'ENOSYS'].includes(error.code)) throw error;
      console.log('Symlink HTTP check skipped: this host does not permit creating symlinks.');
    }
    if (symlinkCreated) {
      const escaped = await request(port, `/${uniqueName}`);
      assert.equal(escaped.status, 404, 'Symlinks cannot expose files outside dist');
    }
    console.log('Static server checks passed: HTTP, MIME, HEAD, errors, path confinement, CLI validation.');
  } finally {
    if (symlinkCreated) await fs.unlink(symlinkPath);
    if (outsideCreated) await fs.unlink(outsideFile);
    await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
