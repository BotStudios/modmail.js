# Modmail.js

A simple discord modmail template that is easy to setup.

### Table Of Contents 

- [Install](#install)
  - [Setup](#setup)
    - [Startup](#Startup)
      - [How To Use](#how-to-use)
- Optional 
  - [Troubleshoot](#troubleshoot)
    - [Plugins](#plugins)    
- Additional 
  - [Links](#links)
  - [Hosting](#hosting)
  - [License](#license)
-------

#### Install
`npm i modmail.js`

#### Setup
`# for compulsory / required`

Please remove the hash after copying these codes
```
const modmail = require('modmail.js') #

modmail.prefix('BOT_PREFIX') # must defined prefix 
modmail.inbox('Inbox_Channel_ID') # and inbox before token
modmail.on('BOT_TOKEN') # 

```
#### Startup 
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



#### Troubleshoot 

Having problem ?

1. Bot Not Working ?
  ###### Missing Token, Inbox Channel ID Or Prefix
  Make sure you have declare these three things. The Bot will not online if Token is undefined. You won't receive modmail if Inbox Channel Id Is not defined. You won't be able to reply without bot prefix.

2. Didn't receive message message ?
   - Inbox
   Bot does not have permission to send message/react
   - User
   User does not allow private messsage from server members

3. Which Permission The Bot Is Missing ?   
   - Run `<PREFIX>check` command, A List Of Permissions That Are Require Will Be Listed
  

#### Plugins 

`we're still working on it`

#### Links

- [@BotStudios](https://github.com/botstudios)
  - [@joeleeofficial](https://github.com/joeleeofficial)
- [More Projects By BotStudios](https://studios.js.org)
- [Github Repo](https://github.com/botstudios/modmail.js)
- [Self Hosting](https://github.com/botstudios/modmail)

#### Hosting

- [repl.it](https://repl.it) - Running But Not 100% Uptime ( With Pings )
- [Heroku](https://heroku.com) - Must Verify Credit Card For 24/7 Uptime

#### License 

```
APACHE 2.0
```
