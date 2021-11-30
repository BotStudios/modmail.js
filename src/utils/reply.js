module.exports = async (message, client, Discord, model, collection) => {
  
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

}
