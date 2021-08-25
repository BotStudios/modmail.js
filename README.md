<h1 align="center">Modmail.js</h1> 
 <p align="center"> <a href="https://www.npmjs.com/package/modmail.js"><img src="https://img.shields.io/npm/v/modmail.js.svg?maxAge=3600" alt="NPM version" /></a>
 <a href="https://www.npmjs.com/package/modmail.js"><img src="https://img.shields.io/npm/dt/modmail.js.svg?maxAge=3600" alt="NPM downloads" /></a>
 <a href="#"><img src="https://img.shields.io/david/botstudios/modmail.js.svg" alt="Dependencies" /></a> </p>
 <p align="center"><a href="https://nodei.co/npm/modmail.js/"><img src="https://nodei.co/npm/modmail.js.png?downloads=true" alt="npm installnfo" /></a></p>


### Table Of Contents 

- [About](#about)
- [Install](#install)
  - [Example Usage](#example-usage)
    - [Startup](#startup) 
- **Additional** 
  - [Docs](https://modmail.js.org/docs)
  - [Guide](https://modmail.js.org)
  - [Release Note](https://github.com/BotStudios/modmail.js/blob/v3/release-note.md)
  - [License](#license)
-------

### About 

Modmail.js is an advance [Discord](https://discordapp.com) Modmail template.


- Performant
- Build-in Plugins 
- Easy To Setup 
- Extendable 

### Install

`npm i modmail.js@latest`

### Example Usage

```
const { Modmail, Intents } = require('modmail.js') 

(async () => {
  try{
const modmail = await Modmail({ 
       token: 'BOT_TOKEN', 
       inbox: 'INBOX_CHANNEL_ID', 
       prefix: 'BOT_PREFIX', 
       clientIntents: ['CLIENT_INTENTS'],
       message: '@mentions/messages',   
  });
console.log(modmail)
  }catch(e){
    console.log(e)
  }
})() 
```

### Startup 

__Getting Started With The Modmail Bot__

1. Replace `BOT_TOKEN` as your discord bot token, `INBOX_CHANNEL_ID` as a modmail inbox channel's id, `CLIENT_INTENTS` as Array Of [Privileged Intents Flags](https://botstudios.github.io/modmail.js/privileged-intents) and `BOT_PREFIX` as your [bot prefix](https://botstudios.github.io/modmail.js/prefix)

2. You're all set ! Now you just have to run the the bot. `e.g node index.js`, `e.g node bot.js`. 

> node.js@v16.6.0 and above is required for this module. [Learn More](https://modmail.js.org)

#### How to use

1. Allow private message from server members `default:allowed`

2. DM ( Direct Message ) Your Bot And It will react ✅ to your message

3. Check Your Inbox Channel, See If There's Anything 

**To Reply A User**

- `<PREFIX>reply <USER_ID> <YOUR_MESSAGE>` e.g. `!reply 123456677544 Hello`

 Please Read Our [Docs](https://botstudios.github.io/modmail.js) To Learn More.

----

### Plugins 
Use plugins to improve user experience

- [ReplyToReply](https://botstudios.github.io/modmail.js/plugins/replyToReply) 
- [Cache](https://botstudios.github.io/modmail.js/plugins/cache)
- [Extend](https://botstudios.github.io/modmail.js/plugins/extend)
- [MongoDb](https://botstudios.github.com/modmail.js/plugins/MongoDB)

#### Links

- [Website](https://botstudios.github.io/modmail.js)
- [@BotStudios](https://github.com/botstudios)
  - [@joeleeofficial](https://github.com/joeleeofficial)
- [More Projects By BotStudios](https://studios.js.org)
- [Github Repo](https://github.com/botstudios/modmail.js)
- [Self Hosting](https://github.com/botstudios/modmail)


#### License 

This project is available as open source under the terms of the [Apache License 2.0](https://github.com/BotStudios/modmail.js/blob/v2/LICENSE)
