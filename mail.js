'use strict';
const path = require('./path.js')
const Discord = require('discord.js');
const { Client, Permissions } = require('discord.js');
const modmail = (obj)   =>
new Promise((resolve, reject) => {
const token = obj.token
const prefix = obj.prefix;
const server = obj.inbox;
const intents = obj.clientIntents;
const resolveItem = obj.resolve;
const Intents = {
  intents: intents,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
};
const client = new Client(Intents);
require('./lib/error.js')(obj, token, prefix, server)
require('./lib/plugins.js')(Discord, client, server, obj, prefix, resolve, resolveItem)
client.on("messageCreate",  message => {
const reply = (msg) => {
  return  message.reply(msg)
}
const inbox = client.channels.cache.get(server)
	if (!message.content.startsWith(prefix) || message.author.bot) return;

if (!message.content.startsWith(prefix)) return;
if(!message.channel.id == inbox) return;
const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
const args1 = args[0] 
if(message.channel.type != 'GUILD_TEXT')return;
if(command == "check"){
  if(message.channel.id == inbox){

    resolve(message.author.tag+' Ran Check Command')
const embed = new Discord.MessageEmbed()
   .setDescription(`**Permissions Checker**\n\n> Check If The Bot Has The Permission That It Needs\n\n- Add Reaction : **${message.member.guild.me.permissions.has(Permissions.FLAGS.ADD_REACTION)}**\n- Manage Message : **${message.member.guild.me.permissions.has('MANAGE_MESSAGES')}**\n- Embed Links : **${message.member.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)}**\n- Read Message History : **${message.member.guild.me.permissions.has(Permissions.FLAGS.READ_MESSAGE_HISTORY)}**\n- View Channel : **${message.member.guild.me.permissions.has(Permissions.FLAGS.VIEW_CHANNEL)}**\n- Send Message : **${message.member.guild.me.permissions.has(Permissions.FLAGS.SEND_MESSAGES)}**`)
   .setFooter('Check The Console For More Information')
   message.reply({ embeds: [embed] }).catch(err => {
     message.channel.send(`**Permissions Checker**\n\n> Check If The Bot Has Permission That It Needs\n\n- Add Reaction : **${message.member.guild.me.permissions.has(Permissions.FLAGS.ADD_REACTION)}**\n- Manage Message : **${message.member.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)}**\n- Embed Links : **${message.member.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)}**\n- Read Message History : **${message.member.guild.me.permissions.has('READ_MESSAGE_HISTORY')}**\n- View Channel : **${message.member.guild.me.permissions.has(Permissions.FLAGS.VIEW_CHANNEL)}**\n- Send Message : **${message.member.guild.me.permissions.has(Permissions.FLAGS.SEND_MESSAGES)}**`)
     reject(`Modmail.js Error : ${err}`)

   })
  }


}
if(command == "reply"){
    if(message.channel.id == inbox){
    
if(args1 == undefined || args1 == ""){
 message.delete()
 reply('Please Provide A User ID').then(msg => {
  setTimeout(() => {
        msg.delete()
  }, 5000)
  }).catch(err => {
    reject(`Modmail.js Error : ${err}`)
  })
}else{
  if(args[1] == undefined || args[1] == ""){
    message.delete()
   reply('Please Provide A Message').then(msg => {
  setTimeout(() => {
        msg.delete()
  }, 5000)
    }).catch(err => {
    reject(`Modmail.js Error : ${err}`)
  })
  }else{
     try{
     client.users.cache.get(args1).send( `**Reply From ${message.author.username} : **\n`+`${message.content.slice(prefix.length+7+args[0].length)}`).then(msg => {
       reply(`Successfully Send Message To <@${args[0]}>`).then(msg => {
           setTimeout(() => {
        msg.delete()
  }, 3000)
   }).catch(err => {
    reject(`Modmail.js Error : ${err}`)

  })
   message.react('✅');
       }).catch(err => {
       message.react('❌');
    reject(`Modmail.js Error : ${err}`)
       

  })
  
   }catch(e){
      message.react('❌');
    reply(e)
   }
  }}
    }else {
      
    }
}



})



client.on("messageCreate", async (message) => {
  if(message.author.bot) return;
  if(obj.plugins.mongodb)return;
  if(obj.category)return;
if(message.channel.type == 'DM'){
    message.react('✅');
  const inbox = client.channels.cache.get(server);
if(message.author.id == `${client.user.id}`){
}else {
  const embed = new Discord.MessageEmbed()
   .setAuthor('Inbox')
   .setDescription(`**__From__ :** <@${message.author.id}> (${message.author.username}#${message.author.discriminator})\n`)
   	.setTimestamp()
.setFooter(`ID : ${message.author.id}`,message.author.avatarURL({ dynamic:true }))

   if(message.content){
     embed.addField(`**__Message__ :**\n`, '```fix\n'+message.content+'```'
,false)
}
    if (message.attachments.size > 0) {

  embed.setImage(`${message.attachments.array()[0].url || ""}`)
    }
   if(obj.message){
     inbox.send({content: `${obj.message || "\n"}`, embeds: [embed]}).catch(console.log)
   }else {
    inbox.send({ embeds: [embed] });
    }
}
}
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}! Modmail Is Ready !`);
  

});

client.login(token)

})

module.exports = modmail;
