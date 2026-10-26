# Chinese with Phenix

A friendly, self-paced Mandarin learning website: choose a real-life situation, work through a short lesson, and practise through games. The interface is in English; lessons use simplified Chinese, pinyin, and English support.

This repository is a small static application written in HTML, CSS, and JavaScript. It has no application backend, database, account system, package dependencies, or build step. The editable files in `dist/` are also the deployable website.

## What is included

- **12 learning paths**, each with one lesson at each of three levels: 36 goal-based lessons.
- **6 shared foundations**, bringing the total to 42 practical lessons.
- **12 quick guides** with downloadable UTF-8 `.txt` phrase sheets.
- Dialogue, vocabulary, a language pattern, two practice questions, and a personal mission in each lesson.
- Optional pinyin and English support, browser pronunciation, three vocabulary games, and progress on the current device.
- A grouped situation selector with all situations plus 12 practical choices, alongside level, area, and skill filters. Quick guides retain their own text search.
- Incomplete lessons resume at their saved step; a foundation warm-up offers a return link to the original lesson without losing its saved progress.
- Sentence help through MyMemory: translation, mixed English/Chinese input, and limited Chinese rephrasing.

| Area | Learning paths |
| --- | --- |
| Everyday life | Travel & tourism; Living abroad; Food & restaurants |
| People & connections | Making friends; Family & heritage; Online & gaming |
| Work & study | Working with colleagues; Business & suppliers; Customer service; School & university; Exam preparation |
| Culture & interests | Culture & entertainment |

The levels are **First steps**, **Finding your feet**, and **Keep growing**. They describe the support and complexity of these activities, not certified proficiency or an official HSK syllabus. Completing a mission records a self-check, not a language assessment.

## Run locally

Install [Node.js](https://nodejs.org/en/download) 22 or newer. Git is needed only to clone or publish the repository. Commands work in PowerShell, macOS Terminal, or a Linux shell:

```sh
git clone https://github.com/hua0164/language.git
cd language
npm start
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000). Stop the server with `Ctrl+C`. `npm run dev` starts the same server; refresh the browser after editing. There is no `npm install` or compilation step.

If PowerShell blocks `npm.ps1`, use `npm.cmd` for these commands, for example `npm.cmd start`.

```sh
# Use another local port
npm start -- --port 8080

# Allow other devices on your local network to connect
npm start -- --host 0.0.0.0 --port 3000
```

`HOST` and `PORT` environment variables are also supported; command-line flags take precedence. For example, PowerShell uses `$env:PORT='8080'`; a POSIX shell uses `PORT=8080 npm start`. The default loopback address serves only your computer. Binding `0.0.0.0` makes the site reachable wherever your firewall and network permit. Use a production static host for an internet-facing deployment.

Use the HTTP server instead of opening `index.html` as a `file://` URL, so browser storage and network behavior match normal hosting.

## Check a change

```sh
npm test
```

The automated checks validate the curriculum and asset references, exercise the local server, check translation behavior with mocked responses, and test learning-state validation, question construction, and completion rules. They do not establish real translation-service availability, pedagogical accuracy, full browser compatibility, or a complete accessibility audit.

Before publishing, also check a narrow mobile viewport and a desktop viewport; navigate with `Tab`, arrow keys, and `Escape`; open each curriculum tab; filter by level, situation, and skill; finish and resume a lesson; download a phrase sheet; and try all three games. Test audio with and without a Mandarin voice. Check sentence help in success, error, and unavailable-network conditions without submitting private text.

## Architecture

```text
dist/                         Source and deployable document root
  index.html                  Page structure, controls, shared dialog
  style.css                   Site, games, translation, responsive styles
  curriculum.css              Paths, guides, and lesson styles
  app.js                      Shared dialog/audio helpers and games
  translation.js              MyMemory requests and sentence-help states
  foundations.js              Six shared lesson records
  paths-personal.js           Six everyday/connection paths and guides
  paths-professional.js       Six work/study/culture paths and guides
  learning-state.js           Pure session validation, questions, completion rules
  curriculum.js               Filtering, lessons, quizzes, guides, progress
scripts/
  serve.cjs                   Dependency-free static development server
  validate-curriculum.cjs     Content schema and asset validation
  test-server.cjs             Static server regression checks
  test-translation.cjs        Translation checks with mocked requests
  test-learning-state.cjs     Learning-state helper regression checks
package.json                  Node version and npm commands
.github/workflows/ci.yml       Repository checks
.github/workflows/pages.yml    Manually triggered Pages deployment
.openai/hosting.json           Optional ChatGPT Sites hosting metadata
Dockerfile                    Optional Nginx container serving dist/
README.md                     Setup, maintenance, deployment, and roadmap
```

Scripts load with `defer` in document order: `app.js` → `translation.js` → `foundations.js` → the two path files → `learning-state.js` → `curriculum.js`. Data files populate `window.PHENIX_FOUNDATIONS` and `window.PHENIX_PATHS`; the curriculum controller reads them after loading. Keep the data files and state helper before `curriculum.js`, and keep `app.js` before consumers of its audio/dialog helpers. The state helper uses a UMD wrapper so its pure functions can run in both the browser and Node tests.

The browser renders curriculum records into the shared native `<dialog>`. Local activity updates browser `localStorage`; phrase-sheet downloads are generated in the browser. Sentence help sends an HTTPS request directly to MyMemory. Hosting only needs to deliver files: it never processes lessons or translation requests on an application server.

## Storage, audio, and privacy

Progress is stored per browser and per origin, including the scheme, hostname, and port. `localhost`, `127.0.0.1`, a different port, and the deployed domain have separate storage. Private browsing, cleared site data, storage restrictions, or another device can remove or hide progress. There is no account, server backup, or automatic cross-device sync.

The game counter uses `phenix-rounds`; the curriculum uses the versioned `phenix-curriculum-v1` key. Curriculum storage includes completed lessons, the last lesson, chosen level and situation, pinyin/English preferences, and each incomplete lesson's step, shuffled question order, selected attempts, and self-check boxes. Saved sessions are validated when loaded. Mission writing drafts stay in memory only and are intentionally not saved or graded. There is no progress export/import yet. Use browser site settings to clear local data when needed; this resets progress for that origin.

Pronunciation uses the browser's `speechSynthesis` API with `zh-CN`. These are device/browser voices, not recordings by Phenix. Availability and quality vary; some voice services may require a network connection. Pinyin remains available when playback fails.

Google Fonts supplies DM Sans and Playfair Display through a CSS import. The site has system sans-serif/serif fallbacks when fonts cannot load. To remove that external request, remove the import or self-host appropriately licensed font files.

### Sentence-help limitations

- Submitted text and optional intended meaning are sent to MyMemory. Requests omit credentials and the referrer; the service still receives the request and network metadata. Read its terms before entering sensitive information.
- The anonymous allowance is documented as 5,000 characters/day, with at most 500 UTF-8 bytes per translation segment. The interface additionally limits each input to 150 characters. Multiple translation steps consume additional quota; shared-IP usage can affect availability.
- Mixed English/Chinese input is submitted as English-to-Chinese and can be misunderstood. Chinese rephrasing uses Chinese → English → Chinese, followed by an English meaning check; meaning can drift.
- An optional English intended meaning becomes the source of the suggestion. This is translation-based assistance, not an AI grammar checker, reliable pinyin correction, teacher feedback, or a verified correction.

See the official [MyMemory API specification](https://mymemory.translated.net/doc/spec.php) and [usage limits](https://mymemory.translated.net/doc/usagelimits.php). Service policies and availability can change. Never put a paid/private API key in browser JavaScript; adding such a service would require a separately designed server-side proxy.

## Edit or extend the curriculum

Edit content directly in the data files. A path has `id`, `title`, `group`, `icon`, `summary`, a `guide`, and three `lessons` ordered by `level: 0`, `1`, `2`. Guides contain a title, three steps, four phrase triples, and a tip. Each phrase is `[Chinese, pinyin, English]`.

Every lesson uses this shape; copy an existing record as a complete example:

```js
{
  id: 'unique-lesson-id', level: 0, title: 'A concrete situation',
  mission: 'What the learner will try', minutes: 8,
  skills: ['Speaking', 'Listening'],
  dialogue: [/* four { speaker, zh, py, en } records */],
  phrases: [/* at least three distinct [Chinese, pinyin, English] triples */],
  pattern: { title: 'A useful pattern', explanation: 'How it works' },
  quiz: { prompt: 'A situation', choices: ['A', 'B', 'C'],
    answer: 0, explanation: 'Why this response fits' },
  challenge: 'A personal task', checklist: ['I tried…', 'I tried…', 'I tried…']
}
```

IDs must stay unique and stable because saved progress refers to them. Skills are `Speaking`, `Listening`, `Reading`, or `Writing`. Groups are `Everyday`, `Connections`, `Work & study`, or `Interests`. The quiz answer is a zero-based index. Its choices, and the first three Chinese phrases used by recall practice, must be distinct.

For a new path, update its data file, the curriculum's explicit path order and situation selector, overview counts, and validator expectations. For a new foundation, update its data file and expected counts. Changing persisted record shapes requires deliberate storage validation/migration rather than silently reusing old data. Run checks and test the changed lesson in the browser.

Authoring review should verify Hanzi, tone marks and tone changes, natural phrasing, English meaning, the correctness of every answer, and cultural context. Keep the mission achievable with the lesson's phrases. A fluent teacher's review is especially valuable; schema checks cannot judge language quality.

## Deploy to a server

Publish **only the contents of `dist/`** as the website's document root. Do not expose the repository root, `.git`, scripts, or local metadata. There are no environment secrets or application-server settings to supply. Keep the relative asset URLs so the site also works below a subpath such as `/language/`.

`.openai/hosting.json` is optional metadata for ChatGPT Sites. Its opaque hosting identifier is not a credential, and other static hosts do not need this file. Existing Sites sharing remains owner-private; source publication does not change that setting or establish a public live demo.

### GitHub Pages

For `hua0164/language`, a project site normally uses `https://hua0164.github.io/language/` after Pages is configured and a deployment succeeds. This address is an expected destination, not a claim that it is currently live.

1. Push the reviewed files to the intended repository. If using GitHub CLI, authenticate with `gh auth login`; do not paste a password or token into repository files or command examples.
2. In repository **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
3. Open the provided Pages workflow (`.github/workflows/pages.yml`) under **Actions** and use **Run workflow**. Its manual trigger keeps source pushes separate from deployment.
4. Confirm the deployment succeeds, then use the URL reported by GitHub and verify lessons, asset loading, storage, and sentence help there.

Repository checks can run on pushes independently of the manual deployment. Pages visibility and access depend on the repository/account configuration; enabling it can expose the website to a public audience. Configure sharing deliberately. See [GitHub's custom Pages workflow guide](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

### Nginx or another static host

Copy `dist/` to a location such as `/var/www/phenix/dist`, then configure that directory as the root:

```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/phenix/dist;
    index index.html;
    location / { try_files $uri $uri/ =404; }
}
```

Replace the domain, check the Nginx configuration, and configure HTTPS through your host or reverse proxy. The application uses in-page anchors, so it does not need a single-page-app catch-all. For Netlify, Cloudflare Pages, or a similar static host, leave the build command empty and set the publish directory to `dist`.

With Docker installed, the included Dockerfile serves the same files through Nginx:

```sh
docker build -t phenix-chinese .
docker run --rm -p 8080:80 phenix-chinese
```

Open [http://localhost:8080](http://localhost:8080). The Dockerfile copies only the static website; `.dockerignore` restricts the build context. Rebuild after content changes. Docker adds a hosting dependency, not an application backend. Keep deployment decisions separate from local preview and source publication.

## Possible next improvements

These are ideas for future work, not features already delivered:

1. **Learning quality:** teacher review, more varied questions, spaced repetition, retrieval practice, clearer review schedules, and optional teacher-recorded audio.
2. **Usability and access:** screen-reader and keyboard testing across browsers, low-vision/contrast review, reduced-motion checks, and testing on real mobile devices.
3. **Portability:** deliberate progress backup/restore and a content-version migration policy; optional offline caching with explicit update handling.
4. **Content growth:** more missions per path, traditional-character support, more interface languages, and a lightweight authoring preview/validation tool.
5. **Sentence help:** evaluate a more reliable service, clearer uncertainty feedback, and an opt-in teacher-feedback flow. Any private API credentials need a server-side design and operating budget.
6. **Optional accounts:** consider sync only if users need it; this introduces authentication, data protection, backups, and ongoing service maintenance.

No license has been selected for this repository. Publication alone does not grant permission to reuse its code, teaching content, branding, or third-party assets; the owner should choose an appropriate `LICENSE` and confirm asset rights before offering reuse.
