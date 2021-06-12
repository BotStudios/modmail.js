## Plugins

### **Why Do You Need Plugins** ?

Well, plugins actually improves user experience and make things easier. Its a small separate build-in script that can be execute whenever you want. Some plugins may require extra stuff so make sure you're ready for that.


### **Before Getting Started...**

- You're now in an advance mode
- Things may be more complicated
- There's no step-by-step guide in this page


### **Execute Plugins**...

An exmple of activating a build-in plugin :

```
const modmail = require('modmail.js') 

modmail.on({ 
  ...
  plugins: [{
     replyToReply: true,
  }]
  
  })
  
  
 ```
**Breakdown :** 

<table>
   <td>
         replyToReply
    <td>
      Plugin's ID

<table>
   <td>
         true
    <td>
      Option <boolean>
 
