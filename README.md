<h1 align="center">Modmail.js</h1> 
 <p align="center"> <a href="https://www.npmjs.com/package/modmail.js"><img src="https://img.shields.io/npm/v/modmail.js.svg?maxAge=3600" alt="NPM version" /></a>
 <a href="https://www.npmjs.com/package/modmail.js"><img src="https://img.shields.io/npm/dt/modmail.js.svg?maxAge=3600" alt="NPM downloads" /></a>
 <a href="#"><img src="https://img.shields.io/david/botstudios/modmail.js.svg?maxAge=3600" alt="Dependencies" /></a> </p>
 <p align="center"><a href="https://nodei.co/npm/modmail.js/"><img src="https://nodei.co/npm/modmail.js.png?downloads=true&stars=true" alt="npm installnfo" /></a></p>

### Table Of Contents 

- [About](#about)
- [Install](#install)
  - [Setup](#setup)
    - [How To Use](#how-to-use) 
- Additional 
  - [Links](#links)
  - [Docs](https://modmail.js.org)
  - [License](#license)
-------

### About 

Modmail.js is an advance [Discord](https://discordapp.com) Modmail template.

- Performant
- Build-in Plugins 
- Easy To Setup 

### Install

`npm i modmail.js`

### Setup
`# for compulsory / required`

Remove the hash after copying these codes
```
const modmail = require('modmail.js') #

modmail.on({ 
  token: 'BOT_TOKEN', #
  inbox: 'INBOX_CHANNEL_ID', #
  prefix: 'BOT_PREFIX', #
  message: '@mentions/messages', 
  inline: true, // inlineReply
  
  })
  .then(r=>{
  console.log(r)
  }).catch(err => {
  console.log(err)
  })

```

### Startup 
Power Up The Modmail Bot

 1. Replace `BOT_TOKEN` as your discord bot token then replace `Inbox_Channel_ID` as a channel's ID you wish to receive modmails.

2. Replace `BOT_PREFIX` as anything you like.

3. You're all set ! Now you just have to run the nodejs. `e.g node index.js`, `e.g node bot.js`. 

#### How to use

1. Allow private message from server members `default:allowed`

2. DM ( Direct Message ) Your Bot And It will react :green_tick: to your message

3. Check The Message In Modmail Inbox Channel.

> To Reply A User

- `<PREFIX>reply <USER_ID> <YOUR_MESSAGE`> e.g. `!reply 123456677544 Hello`

Command Breakdown 

`!` - Prefix
`reply` - Command 
`123456677544` - User ID
`Hello < 2000 Words` - message



----

### Plugins 
Use plugins to improve user experience

- [ReplyToReply](https://botstudios.github.io/modmail.js/plugins/replyToReply) 



#### Links

- [@BotStudios](https://github.com/botstudios)
  - [@joeleeofficial](https://github.com/joeleeofficial)
- [More Projects By BotStudios](https://studios.js.org)
- [Github Repo](https://github.com/botstudios/modmail.js)
- [Self Hosting](https://github.com/botstudios/modmail)


#### License 

```
APACHE 2.0
```
