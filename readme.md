# Dwarf Writer
This is a technical overview of Dwarf Writer.

## Description
Dwarf Writer helps to organize written content during [world building](https://en.wikipedia.org/wiki/Worldbuilding). It is a desktop application with a text editor, content management system, and features for relating entries to one another.

## The Repository
All source code is available in the public [Dwarf Writer Github repository](https://github.com/dyllandry/dwarf-writer).

## The Developer
[Dylan Landry](https://github.com/dyllandry) develops and maintains this project. 

## Install
The following are instructions for configuring an environment to develop Dwarf Writer.
1. Install [Node.js](https://nodejs.org/en/)
1. Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. Install [yarn](https://yarnpkg.com/en/docs/getting-started)
1. Clone the GitHub repository `git clone https://github.com/dyllandry/dwarf-writer.git`
1. Execute `yarn install` in the project directory.

Any additional packages should be installed using yarn.

## Begin Development
1. Execute `npm run start`. This begins:
    1. Webpack process for watching and building Typescript to JavaScript.
    1. Electron process for running the application.

If you change the `electron-main.ts` file, you will need to restart the initiated `npm run start` process (which was responsible for starting the electron process) to observe changes. Just go to the terminal running the process, hit control-c a couple times to kill it, then up-arrow to get your last entered command, and finally enter.
