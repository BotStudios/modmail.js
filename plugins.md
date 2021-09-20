## Plugins

### **About Plugins**

Plugins can improves user experience and make things easier. Its a small separate build-in scripts that can be execute whenever you want. Some plugins may require extra stuff so make sure you're ready for that.


### **Before Getting Started...**

- You're now in an advance mode
- Things may be more complicated
- You should be using the latest modmail.js in order to have the best user experience


### **Execute Plugins**...

An exmple of activating a build-in plugin :

```js
const { Modmail } = require('modmail.js') 

Modmail({ 
  ...
  plugins: [{
     replyToReply: true,
  }]
  
  })
 ```
For more information, read the [docs](https://docs.modmail.js.org/plugin)
<div style="height:30px"> </div>

### **List Of Plugins...**

#### - [Reply To Reply](https://modmail.js.org/plugins/replyToReply)
   Reply To A Mail Without Having To Run `<PREFIX>reply` Command.
    
  Requirement: Discord.js Caches / [Modmail.js Cache](https://modmail.js.org/plugins/cache)

#### - [Cache](https://modmail.js.org/plugins/cache)
   Store discord.js caches
    
  Requirement: A Json File
  
#### - [Extend](https://modmail.js.org/plugins/extend)
  Expand the bot

#### - [MongoDb](https://modmail.js.org/plugins/mongodb)
  Bring the modmail.js to the next level with the help of [MongoDb](https://mongodb.com)
  
  Requirement: A [Mongodb](https://mongodb.com) database.
  
  



