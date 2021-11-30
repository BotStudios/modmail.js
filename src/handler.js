const Discord = require('discord.js');
module.exports = (obj, message, client) => {
var img;
if(message.channel.type == 'DM'){
    message.react('✅');
  const inbox = client.channels.cache.get(obj.inbox);
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

}
