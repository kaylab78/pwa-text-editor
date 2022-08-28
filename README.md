# PWA Text Editor
![Github license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
This progressive web application is a simple text editor that can be installed on a user's device and used with or without connection to the internet.

Deployed Application: [https://agile-earth-33819.herokuapp.com/](https://agile-earth-33819.herokuapp.com/)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)
- [Credits](#credits)

## Installation
In order to use this project, the user must have Node.js installed on their local machine.

To clone the repository, type `git clone git@github.com:kaylab78/pwa-text-editor.git` in the command-line interface.

This project requires several npm packages. Once the repository is cloned, use `npm init -y` to initialize, and then use `npm install` in the root directory to install the packages for that directory.

Next, navigate to the `client` directory and use `npm install` to install the packages required for the client. Then navigate to the `server` directory and use `npm install` to install the packages required for the server.

## Usage
To use the application from the command-line, type npm start in the root directory. A new directory called `dist` will be compiled. Navigate to http://localhost:3001.

To use the deployed application, visit [this link](https://agile-earth-33819.herokuapp.com/). 

Once the user opens the app, they can use it as a text editor. When the user closes the app and then opens it at a later time, their content from the last time they were in the app will show up.

The app can also be installed to the local device. Click the "Install!" button in the top left corner, and then open the app.

## Technologies
- [Babel](https://www.npmjs.com/package/babel-loader)
- [CodeMirror](https://codemirror.net/)
- [CodeMirror Themes](https://www.npmjs.com/package/code-mirror-themes)
- [Concurrently](https://www.npmjs.com/package/concurrently)
- [Express.js](https://expressjs.com/)
- [HTMLWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)
- [idb](https://www.npmjs.com/package/idb)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [webpack](https://webpack.js.org/)
- [Workbox](https://developer.chrome.com/docs/workbox/)

## License
&copy; 2022 by Kayla Backus

This project is licensed under the MIT license.

[License: MIT License](https://opensource.org/licenses/MIT)

## Credits
Boot Camp Module 19

Chrome Developers. (2021, April 29). *workbox-recipes.* Workbox. [https://developer.chrome.com/docs/workbox/modules/workbox-recipes/](https://developer.chrome.com/docs/workbox/modules/workbox-recipes/)

Chrome Developers. (2020, June 24). *workbox-cacheable-response.* Workbox. [https://developer.chrome.com/docs/workbox/modules/workbox-cacheable-response/](https://developer.chrome.com/docs/workbox/modules/workbox-cacheable-response/)

Starter code cloned from [https://github.com/coding-boot-camp/cautious-meme](https://github.com/coding-boot-camp/cautious-meme).