---
layout: default
title: Home
nav_order: 1
description: "Documentation Of Modmail.js"
permalink: /
---

<h1 align="center">Modmail.js</h1>
<p align="center">
<a href="https://www.npmjs.com/package/modmail.js"><img src="https://img.shields.io/npm/v/modmail.js.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/modmail.js"><img src="https://img.shields.io/npm/dt/modmail.js.svg?maxAge=3600" alt="NPM downloads" /></a>
<a href="#"><img src="https://img.shields.io/david/botstudios/modmail.js.svg" alt="Dependencies" /></a></p>
<p align="center">
<a href="https://nodei.co/npm/modmail.js/"><img src="https://nodei.co/npm/modmail.js.png?downloads=true" alt="npm installnfo" /></a></p>

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
