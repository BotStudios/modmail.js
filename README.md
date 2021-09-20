<h1>Introduction</h1>

Welcome to the modmail.js guide made by its contributors. You're probably here to learn how to set up and use modmail.js, and you've came to the right place.
This guide covers everything you need to know about modmail.js. You can also try out our pure [modmail](https://github.com/botstudios/modmail). 

### **Before Getting Started**...

Here's some information you need to know about :

  - To use this package, you should have a fairly decent grasp of JavaScript and discord.js themselves. Its going to be hard for you to troubleshoot errors if you don't.
  - This is a `modmail.js version 3` guide
  - We encourage you to use `modmail.js version 3.0.0^` and above
  - If you have an older version of nodejs (i.e. below 12.0), you should upgrade to the latest version.
  - You May Check Out [An Example Of Setting Up A Modmail.js Bot](https://github.com/BotStudios/modmail.js/tree/v3/example)
  - **Scroll down to the bottom if you want to go advance**
  
### **Getting Started**...

#### **1. Creating the bot file**

You don't actually need any professional editing tools if you're using the npm package, but you do need something that can edit files ( for example : notepad or anything you prefer ). Now, you just have to create a file that ends with `.js` ( i.e. index.js ).

Once you've created a new file, copy & paste the following code into your file.

```js
const { Intents, on } = require('modmail.js') 

on({ 
  token: 'BOT_TOKEN', 
  inbox: 'INBOX_CHANNEL_ID', 
  prefix: 'BOT_PREFIX', 
  clientIntents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES ],
  message: '@mentions/messages',   
  })
  .then(r=>{
  console.log(r.plugins)
  }).catch(err => {
  console.log(err)
  });

  ```
Now you can replace `BOT_TOKEN` with your bot token, `INBOX_CHANNEL_ID` as a modmail inbox channel's id ( i.e. 815256356119682228 ) and `BOT_PREFIX` as your bot's [prefix](https://modmail.js.org/prefix) ( i.e. ! ). Just put `@mentions/messages` and `clientIntents` away first, we'll talk about that later. For now, type in `node your-file-name.js`, and press enter in your console. If you see the `Logged in as <Your Bot's Name>! Modmail Is Ready !` message after a few seconds, you're good to go! Read [Troubleshoot](#troubleshoot) if you don't get the exact result.

#### **2. Customize**

After setting up the bot, you're ready to customize it ! So let's start with the `@mentions/messages`, ( you can replace with anything you want ) it will send that message before every mail, to notify someone by pingging them ( i.e. `<@12345678904312>` ). ( You can choose to disable it by leaving it blank ). Now, let's talk about [clientIntents](https://discordjs.guide/popular-topics/intents.html#gateway-intents). Basically you don't have to worry much about this if you're not [extending](https://modmail.js.org/plugins/extend) the bot, `[ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES ]` 

#### **3. How To Use**

Once you setup correctly, you're ready to learn how to use it. But first, let's see if the bot is working by sending a direct message to the bot. If the message that you sent appear on your inbox channel ( its an embed, and does not look exactly the same but does include the message you've sent ), this means that you've setup correctly and everythng will work. If not, please read [Troubleshoot](#troubleshoot).

Now let's reply to that message by running `<YOUR_PREFIX>reply <USER_ID> hello` ( i.e. `-reply 235088799374384325 hello` ) in your inbox channel. You should receive a `hello` message from the bot after running that command. Note: This command will only work in an inbox channel.

### **Troubleshoot**

Having Issue ? Here's some common issues :

#### **Bot not working...**

 - Missing `Token`, `Inbox Channel ID` Or `Prefix` - Check If You're Missing One Of These
 - You should get an error if something went wrong `=>` Try [Google Searching](https://google.com) those errors
 - Try disabling plugins
 - Check Out [Discord.js Errors and DiscordAPIErrors](https://discordjs.guide/popular-topics/errors.html)

#### **Not Receiving Inbox/Mails...**

 - Make sure to only send a message after the bot went online 
 - Check if you configure the `INBOX_CHANNEL_ID` correctly, the bot will only send mails to that specific channel you configure
 - Bot don't have permission to send message, embed or react to messages 
 - Check the console, see if there's any error. Try searching for those errors on [Google](https://www.google.com).

#### **Common Issues...**
  
 - Make sure you've enable `allow private messsage from server members` in user settings 
 - The bot will react ❌ to your message if it fails to send that message to the user ( probably because that user didn't enable `allow private messsage from server members` )
 - Run `<PREFIX>check` ( i.e. `!check` ) and *A List Of Permissions That Are Required Will Be Listed*. **`The bot should return an embed`** 

Make sure everything return as `true`. If you invited the bot with those permissions but the bot didn't have it, you'll have to give the bot a role with those permissions. Also remember to check the console, use `.catch()` to catch those errors. 
 - [Being Rate Limited](https://discord.com/developers/docs/topics/rate-limits)
 - Try restarting the bot
 - Feel free to [create an issue](https://github.com/botstudios/modmail.js/issues/new) if none of them works. You can also get support [here](https://discord.gg/s56rMHNwhC)

### **Plugins...**

Plugins are really cool and has its own dedicated page. [Check It Out](./plugins)

### **Useful Links**

- [BotStudios@Github](https://github.com/BotStudios)
- [modmail.js - docs](https://docs.modmail.js.org)
- [modmail.js@npmjs](https://npmjs.com/modmail.js)
- [Example](https://github.com/BotStudios/modmail.js/tree/v3/example)
- [Bot Studios - Discord](https://discord.gg/s56rMHNwhC)
- [discord.js - docs](https://discord.js.org)
- [discord.js - guide](https://discordjs.guide)

### **Contributing**

Bug reports and pull requests are welcome on [GitHub](https://github.com/botstudios/modmail.js)


### **License**

This project is available as open source under the terms of the [**Apache License 2.0**](./project-license)
