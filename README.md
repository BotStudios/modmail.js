<h1>Introduction</h1>

Welcome to the modmail.js guide made by its contributors. You're probably here to learn about how to setup and use a modmail.js, and you've came to the right place.
This guide cover everything you need to know about modmail.js. You can also try out our pure [modmail](https://github.com/botstudios/modmail)

### **Before Getting Started**...

Here's some information you need to know about :

  - To use this package, you should have a fairly decent grasp of JavaScript and discord.js themselves. Its going to be hard for you to troubleshoot errors if you don't.
  - This is a `modmail.js version 2` and above guide
  - We encourage you to use `modmail.js version 2.0.0^` and above
  - If you have an older version of nodejs (i.e. below 12.0), you should upgrade to the latest version.
  
### **Getting Started**...

#### **1. Creating the bot file**

You don't actually need any professional editing tools if you're using the npm package, but you do need something that can edit files ( for example : notepad or anything you prefer ). Now, you just have to create a file that ends with `.js` ( i.e. index.js ).

Once you've created a new file, copy & paste the following code into your file.

```js
const modmail = require('modmail.js') 

modmail.on({ 
  token: 'BOT_TOKEN', 
  inbox: 'INBOX_CHANNEL_ID', 
  prefix: 'BOT_PREFIX', 
  message: '@mentions/messages', 
  inline: true, // inlineReply
  
  })
  .then(r=>{
  console.log(r)
  }).catch(err => {
  console.log(err)
  })
  ```
Now you can replace `BOT_TOKEN` with your bot token, `INBOX_CHANNEL_ID` as a modmail inbox channel's id ( i.e. 815256356119682228 ) and `BOT_PREFIX` as your bot's [prefix](https://modmail.js.org/prefix). Just put `@mentions/messages` and `inlineReply` away first, we'll talk about that later. For now, type in `node your-file-name.js`, and press enter in your console. If you see the `Logged in as <Your Bot's Name>! Modmail Is Ready !` message after a few seconds, you're good to go! Read [Troubleshoot](#troubleshoot) if you don't get the exact result.

#### **2. Customize**

After setting up the bot, you're ready to customize it ! So let's start with the `@mentions/messages`, ( you can replace with anything you want ) it will send that message before every mail, to notify someone. ( You can just disable it by leaving it blank )
