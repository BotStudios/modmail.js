<h2>Plugin : Cache</h2>

### About
Store [discord.js](https://discord.js.org) caches in a file so you won't lose them whenevever you restart the bot. Currently modmail.js only store some 
of discord.js's cache, meaning that currently you can't do anything with that.
### Usage
 
```js
.on({
  ...
  plugins: [{
    cache: './FileName.json',
   }]
   
   })
```

### Setup 

1. Create A `.json` File And Insert An Empty Array : `[ ]`
2. Replace `./FileName.json` With Your File Name


### Note

- Once this plugin gets updated ( if you update the pacakge that includes cache plugin patches ), you'll have to reset everything in your json file ( delete every json objects inside an array ). So make sure to backup that json file before you delete them.
- This plugin ( currently ) will only update the json file when a modmail is received.
- If your bot needs to restart constantly, this plugin is what you need.



#### Other Supported Plugins

- [replyToReply](./replyToReply) 



