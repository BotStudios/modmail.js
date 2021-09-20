## Plugins

### **About Plugins**

plugins actually improves user experience and make things easier. Its a small separate build-in script that can be execute whenever you want. Some plugins may require extra stuff so make sure you're ready for that.


### **Before Getting Started...**

- You're now in an advance mode
- Things may be more complicated
- There's no step-by-step guide in this page


### **Execute Plugins**...

An exmple of activating a build-in plugin :

```js
const modmail = require('modmail.js') 

modmail.on({ 
  ...
  plugins: [{
     replyToReply: true,
  }]
  
  })
 ```
#### **Breakdown :** 

`replyToReply` - **Plugin `<Object>`**

`true` - **Option `<boolean>`**

------------------
<div style="height:30px"> </div>

### **List Of Plugins...**

#### - [Reply To Reply](https://modmail.js.org/plugins/replyToReply)
  Description: Reply To A Mail Without Having To Run `<PREFIX>reply` Command.
  
  Requirement: Discord.js Caches 

#### - [Cache](https://modmail.js.org/plugins/cache)
  Description: Store discord.js caches
  
  Requirement: A Json File



