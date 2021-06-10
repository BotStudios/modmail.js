'use strict';
const path = require('./path.js')
  
const Discord = require('discord.js');
const client = new Discord.Client();
require('./lib/client/inlinereply.js')

const { Server } = require('./lib/client/inboxMail.js')

 const { Prefix } = require('./lib/client/prefix.js')
const { Perms } = require('./lib/client/perms.js')


const modmail = (obj)   =>
new Promise((resolve, reject) => {
const token = obj.token
const prefix = obj.prefix || Prefix;
const server = obj.inbox || Server
require('./lib/error.js')(obj, token, prefix, server)
require('./lib/plugins.js')(Discord, client, server, obj, prefix, resolve)
client.on("message",  message => {
  const reply = (msg) => {
  if(!obj.inline){
  return  message.reply(msg)
  }else {
return message.ireply(msg)
  }
}
const inbox = client.channels.cache.get(server)
	if (!message.content.startsWith(prefix) || message.author.bot) return;

if (!message.content.startsWith(prefix)) return;
if(!message.channel.id == inbox) return;
const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
const args1 = args[0] 

if(command == "check"){
  if(message.channel.id == inbox){

    resolve(message.author.tag+' Ran Check Command')
const embed = new Discord.MessageEmbed()
   .setDescription(`**Permissions Checker**\n\n> Check If The Bot Has The Permission That It Needs\n\n- Add Reaction : **${message.member.guild.me.hasPermission('ADD_REACTIONS')}**\n- Manage Message : **${message.member.guild.me.hasPermission('MANAGE_MESSAGES')}**\n- Embed Links : **${message.member.guild.me.hasPermission('EMBED_LINKS')}**\n- Read Message History : **${message.member.guild.me.hasPermission('READ_MESSAGE_HISTORY')}**\n- View Channel : **${message.member.guild.me.hasPermission('VIEW_CHANNEL')}**\n- Send Message : **${message.member.guild.me.hasPermission('SEND_MESSAGES')}**`)
   .setFooter('Check The Console For More Information')
   message.channel.send(embed).catch(err => {
     message.channel.send(`**Permissions Checker**\n\n> Check If The Bot Has Permission That It Needs\n\n- Add Reaction : **${message.member.guild.me.hasPermission('ADD_REACTIONS')}**\n- Manage Message : **${message.member.guild.me.hasPermission('MANAGE_MESSAGES')}**\n- Embed Links : **${message.member.guild.me.hasPermission('EMBED_LINKS')}**\n- Read Message History : **${message.member.guild.me.hasPermission('READ_MESSAGE_HISTORY')}**\n- View Channel : **${message.member.guild.me.hasPermission('VIEW_CHANNEL')}**\n- Send Message : **${message.member.guild.me.hasPermission('SEND_MESSAGES')}**`)
     reject(`Modmail.js Error : ${err}`)

   })
  }
        message.delete({timeout:1000})

}
if(command == "reply"){
    if(message.channel.id == inbox){
    
if(args1 == undefined || args1 == ""){
 message.delete()
 reply('Please Provide A User ID').then(msg => {
    msg.delete({timeout:5000})
  }).catch(err => {
    reject(`Modmail.js Error : ${err}`)
  })
}else{
  if(args[1] == undefined || args[1] == ""){
    message.delete()
   reply('Please Provide A Message').then(msg => {
      msg.delete({timeout:5000})
    }).catch(err => {
    reject(`Modmail.js Error : ${err}`)
  })
  }else{
     try{
     client.users.cache.get(args1).send( `**Reply From ${message.author.username} : **\n`+`${message.content.slice(prefix.length+7+args[0].length)}`).then(msg => {
       reply(`Successfully Send Message To <@${args[0]}>`).then(msg => {
     msg.delete({timeout:3000})
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



client.on("message", async (message) => {
  if(message.author.bot) return;


if(message.channel.type == 'dm'){
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
     inbox.send(`${obj.message || "\n"}`, {embed:embed})
   }else {
    inbox.send(embed);
    }
}
}
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}! Modmail Is Ready !`);
  

});

client.login(token)


})

module.exports = modmail;
