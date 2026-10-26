'use strict';

const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const net = require('node:net');

const DIST_ROOT = path.resolve(__dirname, '..', 'dist');
const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
  '.wasm': 'application/wasm'
};

function isInside(root, candidate) {
  const relative = path.relative(root, candidate);
  return relative === '' || (!path.isAbsolute(relative) && relative !== '..' && !relative.startsWith(`..${path.sep}`));
}

function sendText(request, response, status, message, headers = {}) {
  const body = Buffer.from(`${message}\n`);
  response.writeHead(status, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Content-Length': body.length,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    ...headers
  });
  response.end(request.method === 'HEAD' ? undefined : body);
}

function requestPath(rawUrl) {
  // Inspect the original path before URL normalization can erase a traversal.
  if (!rawUrl || !rawUrl.startsWith('/') || rawUrl.includes('#')) return null;
  let decoded;
  try {
    decoded = decodeURIComponent(rawUrl.split('?')[0]);
  } catch {
    return null;
  }
  // Backslashes and colons can act as path syntax on Windows.
  if (/[\\:\u0000-\u001f\u007f]/.test(decoded)) return null;
  const segments = decoded.split('/');
  if (segments.includes('..')) return null;
  return { decoded, segments };
}

function createServer() {
  // Resolve independently of process.cwd(); importing this file starts no listener.
  const rootPromise = fs.realpath(DIST_ROOT);
  // Avoid an unhandled rejection if the directory is absent before a request arrives.
  rootPromise.catch(() => {});
  return http.createServer(async (request, response) => {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      sendText(request, response, 405, 'Method not allowed', { Allow: 'GET, HEAD' });
      return;
    }

    const parsed = requestPath(request.url);
    if (!parsed) {
      sendText(request, response, 400, 'Bad request');
      return;
    }
    // Hidden files are never public assets, even if accidentally copied into dist.
    if (parsed.segments.some(segment => segment.startsWith('.'))) {
      sendText(request, response, 404, 'Not found');
      return;
    }

    try {
      const root = await rootPromise;
      let candidate = path.resolve(root, `.${parsed.decoded}`);
      if (!isInside(root, candidate)) {
        sendText(request, response, 400, 'Bad request');
        return;
      }
      if (parsed.decoded.endsWith('/')) candidate = path.join(candidate, 'index.html');

      // Both lexical confinement and the resolved path matter: a symlink in dist
      // must not expose source files, credentials, or files elsewhere on the host.
      const realPath = await fs.realpath(candidate);
      if (!isInside(root, realPath)) {
        sendText(request, response, 404, 'Not found');
        return;
      }
      const stat = await fs.stat(realPath);
      if (!stat.isFile()) {
        sendText(request, response, 404, 'Not found');
        return;
      }

      const extension = path.extname(realPath).toLowerCase();
      const body = request.method === 'HEAD' ? null : await fs.readFile(realPath);
      response.writeHead(200, {
        'Content-Type': CONTENT_TYPES[extension] || 'application/octet-stream',
        'Content-Length': body === null ? stat.size : body.length,
        'Cache-Control': extension === '.html' ? 'no-cache' : 'public, max-age=300',
        'X-Content-Type-Options': 'nosniff'
      });
      response.end(body);
    } catch (error) {
      const missing = ['ENOENT', 'ENOTDIR', 'EISDIR', 'EACCES', 'EPERM'].includes(error.code);
      sendText(request, response, missing ? 404 : 500, missing ? 'Not found' : 'Internal server error');
    }
  });
}

function parseOptions(argv, env) {
  const options = {};
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--help' || argument === '-h') {
      options.help = true;
      continue;
    }
    const match = /^(--port|--host)(?:=(.*))?$/.exec(argument);
    if (!match) throw new Error(`Unknown argument: ${argument}`);
    const name = match[1].slice(2);
    if (Object.hasOwn(options, name)) throw new Error(`Duplicate --${name} option`);
    const value = match[2] === undefined ? argv[++index] : match[2];
    if (value === undefined || value === '' || value.startsWith('--')) {
      throw new Error(`--${name} requires a value`);
    }
    options[name] = value;
  }
  if (options.help) return options;

  const portText = options.port ?? env.PORT ?? '3000';
  const port = Number(portText);
  if (!/^\d+$/.test(portText) || !Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('PORT / --port must be an integer from 1 to 65535');
  }
  const host = options.host ?? env.HOST ?? '127.0.0.1';
  const hostname = /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*\.?$/i;
  if (!net.isIP(host) && !hostname.test(host)) {
    throw new Error('HOST / --host must be an IP address or hostname without a protocol or port');
  }
  return { port, host };
}

if (require.main === module) {
  try {
    const options = parseOptions(process.argv.slice(2), process.env);
    if (options.help) {
      console.log('Usage: node scripts/serve.cjs [--port 3000] [--host 127.0.0.1]\nPORT and HOST environment variables are also supported. CLI options take precedence.');
    } else {
      const server = createServer();
      server.on('error', error => {
        console.error(`Unable to start server: ${error.message}`);
        process.exitCode = 1;
      });
      server.listen(options.port, options.host, () => {
        const displayHost = net.isIP(options.host) === 6 ? `[${options.host}]` : options.host;
        console.log(`Phenix Chinese: http://${displayHost}:${options.port}`);
      });
      for (const signal of ['SIGINT', 'SIGTERM']) {
        process.once(signal, () => server.close(() => { process.exitCode = 0; }));
      }
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = { createServer };
