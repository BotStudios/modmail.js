module.exports = (obj) => {
  
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

}
