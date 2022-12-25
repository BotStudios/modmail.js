#! /usr/bin/env node
import fetch from 'node-fetch';
import fs from 'fs';
import minimist from 'minimist';

const pkg = JSON.parse(fs.readFileSync("./../package.json", 'utf-8'));
const argv = minimist(process.argv.slice(2), {
    alias: {
      'development': 'dev',
      'stable': 'main'
    }
});
const command = argv._[0];
(async () => {
switch(command) {
    case "help":    
    console.log(`
    modmail.js ${pkg.version} - The modmailbot management tool

    Commands: 
        - [modmail create]  Create a new modmail bot
        - [modmail config]  Configure a modmail bot
        - [modmail version] Check for updates
        - [modmail help]    Get help
    
    Arguments:
        - [dir]   Directory name
        - [port]  Specify port
    `)
    break;
}
})();
