'use strict';
const mongodb = (client, server, obj, cache, Discord) =>{
const mongoose = require('mongoose');
const collection = new Discord.Collection();
const model = mongoose.model("modmail", new mongoose.Schema({ User: String, Channel: String, Messages: Array }));
client.once('ready', async () => {
  if(obj.plugins[0].mongodb){
  mongoose.connect(obj.plugins[0].mongodb, { useUnifiedTopology: true, useNewUrlParser: true });
  model.find({}).then((data) => {
            data.forEach((x) => {
                collection.set(x.User, x);
            });
  })
}
})

client.on('messageCreate',async  message => {
if(message.author.bot)return;
if(!obj.category)return;
if(!obj.roleID)return;
var img;
if(message.channel.type == 'DM'){
    message.react('✅');
  const inbox = client.channels.cache.get(server);
  const embed = new Discord.MessageEmbed()
   .setAuthor('Inbox')
   .setDescription(`**__From__ :** <@${message.author.id}> (${message.author.username}#${message.author.discriminator})\n`)
   	.setTimestamp()
.setFooter(`ID : ${message.author.id}`,message.author.avatarURL({ dynamic:true }));

const createMail = async() => {
  const createdChannel = await inbox.guild.channels.create(`${message.author.username}`, { type: "GUILD_TEXT", parent: obj.category, permissionOverwrites: [{ id: inbox.guild.id, deny: ["VIEW_CHANNEL"], }, obj.roleID ? { id: obj.roleID, allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]} : null, ]});
    const props = {
User: message.author.id, Channel: createdChannel.id, 
Messages: [ `${message.author.tag} :: ${message.content} ${img || ""}` ]};
   if(message.content){
     embed.addField(`**__Message__ :**\n`, '```fix\n'+message.content+'```'
,false)
}
    if (message.attachments.size > 0) {
      img = `${message.attachments.first().url || ""}`;
  embed.setImage(`${message.attachments.first().url || ""}`)
    }

   if(obj.message){
     createdChannel.send({content: `${obj.message || "\n"}`, embeds: [embed]}).then((m) => m.pin()).catch(console.log);
   }else {
    createdChannel.send({ embeds: [embed] }).then((m) => m.pin()).catch(console.log);
    }
    collection.set(props.User, props);
   new model(props).save();
};
   const data = await model.findOne({ User: message.author.id });
   if(!collection.get(message.author.id))return await createMail();
   const channel = client.channels.cache.get(collection.get(message.author.id).Channel);
   if (!channel) return model.deleteMany({ Channel: data.Channel });
const sendMessage = async (channel, user) => {
            const content = () => {
                const context = [];
                const attachment = message.attachments.first();
                if (message.content)
                    context.push(message.content);
                if (attachment)
                    context.push(`[${attachment.url || attachment.proxyURL}]`);
                return context.join("  ");
            };
            var img;
            if (data) {
                data.Messages = [
                    ...data.Messages,
                    `${message.author.tag} :: ${content()}`,
                ];
                data.save().catch((err) => { });
            }
   if(message.content){
     embed.addField(`**__Message__ :**\n`, '```fix\n'+message.content+'```'
,false)
}
    if (message.attachments.size > 0) {
  embed.setImage(`${message.attachments.array()[0].url || ""}`)
    }

   if(obj.message){
     client.channels.cache.get(data.Channel).send({ content: `${obj.message || ""}`,embeds: [embed] }).catch(console.log);
   }else {
   client.channels.cache.get(data.Channel).send({ content: `${obj.message}`,embeds: [embed] }).catch(console.log);
    }
       
        };
  await sendMessage();
}
})
client.on('messageCreate', async message => {
  if(message.author.bot)return;
  if(message.channel.type == 'DM')return;
  if(!message.member.roles.cache.some(role => role.id === obj.roleID))return;
  const data = await model.findOne({ Channel: message.channel.id });
  if(!data)return;
  if(message.content.includes(obj.prefix+'delete'))return;
  if(data.Channel == message.channel.id){
      client.users.cache.get(data.User).send( `**Reply From ${message.author.username} : **\n`+`${message.content}`).then(msg => {
       message.reply(`Successfully Send Message To <@${data.User}>`).then(m => {
           setTimeout(() => {
        m.delete()
  }, 3000)
   }).catch(err => {
       message.react('❌');
  })
   message.react('✅');
       }).catch(err => {
       message.react('❌');    
  })
  }
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
