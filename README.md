# WebCrafter

<p align="center">
  <img src="./assets/logo.svg" width="350" />
  <h1>An extensible lowcode website builder</h1>
  <a href="https://img.shields.io/badge/License-GPLv3-blue.svg">
    <img alt="Licence" src="https://img.shields.io/badge/License-GPLv3-blue.svg">
  </a>
    <a href="https://lerna.js.org/">
    <img alt="Lerna" src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg">
  </a>
</p>

## Features

Web Crafter is a low-code website building platform aimed to help people who don't know website programing to buildup their own website by drag and drop.
- Login with Google authentication (TODO)
- Provide basic widgets for user to buildup the website
- Provide flexible drag-and-drop feature for people to add and modify the widget for their webpage in canvas
- Styles and properfies of widget can be modified easily from setting panel
- support event for some of the widget (e.g: support onclick event on button)


## Running Project

1. Setup environment.

2. Install packages

```bash
npm install
```

3. Build the application

```bash
npm run build
```

4. Run application

```bash
npm run start
```

TODO: frontend and backend setup will be handled properly by `npm run start` command when the project is finished.

Plan to merge every project setting up command into a single command.

---

to run in dev mode:

```bash
npm run dev
```

to run the back-end server:

```bash
node server.js
```
Database server link:

mongodb+srv://zzq961213:Aa12345678@cluster0.5ewkh2k.mongodb.net/database

## Tests

Run `npm test` in the project root to execute the unit tests via [Jest](https://jestjs.io).

## Wiki

The wiki can contains all meeting notes and major design decisions, rationale and project management information.
TODO...

## Contributors

- Zixuan Wen (zwen655, director, frontend / backend engineer)
- Mianmian Zheng (mzhe930, frontend engineer)
- Ziqi Zhong (zzho500, backend engineer)
- Yue Wang (wany359, frontend engineer)
- Qiufan Qian (qqia320, frontend engineer)
