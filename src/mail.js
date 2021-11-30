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
})

client.on('messageCreate', async message => {
  if(message.channel.type == 'DM')return;
 if(!message.member.roles.cache.some(role => role.id === obj.roleID))return

if(message.content.toLowerCase() == obj.prefix+'delete'){
const data = await model.findOne({ Channel: message.channel.id });
console.log(data)
if(data){
  const mailChannel = client.channels.cache.get(message.channel.id);
  message.reply('This Mail Will Be Deleted Soon').then(() => {
setTimeout(async () => {
mailChannel.delete();
await data.delete();
}, 3000);
  })
}
}
})

}


module.exports = mongodb;
