function replyToReply(client, server, obj) {
  client.on('message', message => {
      const reply = (msg) => {
  if(!obj.inline){
  return  message.reply(msg)
  }else {
return message.ireply(msg)
  }
}
    if(message.channel.id == server){
     //  console.log(message)
   
   
            if(message.reference){
                const messages = client.channels.cache.get(server).messages.cache.find(msg =>msg.id ==`${message.reference.messageID}`)
              if(messages){
                              if(messages.embeds[0]){

                 if(!messages.author.id == client.user.id) return;
              if(!messages.embeds[0].footer.text.startsWith('ID :')) return;
               
             
            
              const id = messages.embeds[0].footer.text.slice(5)
              client.users.cache.get(`${id}`).send( `**Reply From ${message.author.username} : **\n`+`${message.content}`).then(msg => {
       reply(`Successfully Send Message To <@${id}>`).then(msg => {
     msg.delete({timeout:3000})
   }).catch(err => {
    
       message.react('❌');

  })
   message.react('✅');
       }).catch(err => {
       message.react('❌');
       

  })
        }   } }
    }
  })
}
module.exports = replyToReply;
