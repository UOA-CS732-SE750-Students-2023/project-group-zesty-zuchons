# Web Crafter

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
- Login with Google authentication
- Provide basic widgets for user to buildup the website.
- Provide flexible drag-and-drop feature for people to add and modify the widget for their webpage in canvas.
- Styles and properfies of widget can be modified easily from setting panel.
- Modifiable and customizable switch/button/chip for multiple usage.
- Support event for some of the widget (e.g: support onclick event on button).
- Auto loading for the canvas if user already saved one.
- Simple and easy to use, users can buildup their own website without much programming skills.


## Tech stacks

The main Tech stacks we are using in this project are listed below:

- craft.js: An opensource framework for building web builder application
- material UI: Styling library used for both styling the application and widget in the application
- vite: light-weighted frontend react CLI
- node.js: open-source, cross-platform JavaScript runtime environment
- express: minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications
- Jest: testing framework designed to ensure correctness of any JavaScript codebase
- Swagger: Dashbord for managing / testing backend APIs


## Running Project

1. Setup nodejs environment, make sure MongoDB is installed on the computer.

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

## Contributors

- Zixuan Wen (zwen655)
- Mianmian Zheng (mzhe930)
- Ziqi Zhong (zzho500)
- Yue Wang (wany359)
- Qiufan Qian (qqia320)
