#! /usr/bin/env node
const pkg = require('./../package.json');
const fetch = require('node-fetch');
const fs = require('fs');

const command = process.argv[2];
const option1 = process.argv[3];
const option2 = process.argv[4];
const option3 = process.argv[5];

const runCommand = (command, args, options = undefined) => {
  const spawned = spawn(command, args, options);
  return new Promise((resolve) => {
    spawned.stdout.on('data', (data) => {
      console.log(data.toString());
    });
    
    spawned.stderr.on('data', (data) => {
      console.error(data.toString());
    });
    
    spawned.on('close', () => {
      resolve();
    });
  });
}


(async () => {

switch(command){

case "--version":
case "-v":
case "version":
console.log(pkg.version)
break;

default: 
if (!command || command.match(/[<>:"\/\\|?*\x00-\x1F]/)) {
  return console.log(`
  Invalid file name.
  Usage: modmail.js <filename>  
`);
}
 fetch('https://raw.githubusercontent.com/BotStudios/modmail.js/v3/example/index.js').then(res => res.text())
  .then(res => {
    fs.writeFileSync(`${command}.js`, res)
  }).then(() => {
    console.log(`
        Done! 🏁
     To get started:
      run cd ${command}
      node index.js
      `)
  });
}
})()

