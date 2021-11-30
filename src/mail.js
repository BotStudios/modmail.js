'use strict';
const Discord = require('discord.js');
const mongodb = (obj) => {
const client = obj.client;
const mongoose = require('mongoose');
const collection = new Discord.Collection();
const model = mongoose.model("modmail", new mongoose.Schema({ User: String, Channel: String, Messages: Array }));
require('./src/error.js')(obj);
client.once('ready', async () => {
  await mongoose.connect(obj.plugins[0].mongodb, { useUnifiedTopology: true, useNewUrlParser: true });
  model.find({}).then((data) => {
            data.forEach((x) => {
                collection.set(x.User, x);
            });
  });
});
  
  
client.on('messageCreate', async (message) => {
   if(message.author.bot)return;
   try {
     await (require('./utils/handler.js'))(message, client, Discord, model, collection);
     await (require('./utils/reply.js'))(message, client, Discord, model, collection);
     await (require('./utils/delete.js'))(message, client, Discord, model, collection);
   }catch(e) {
     console.log(e);
     message.reply({
       embeds: [
         {
            description: 'Something Went Wrong'
         }
        ]
     });
   }
});

}


module.exports = mongodb;
