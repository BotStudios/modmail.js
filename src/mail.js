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

}


module.exports = mongodb;
