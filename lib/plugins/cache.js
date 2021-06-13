function cacheFc(client, server, obj) {
const fs = require('fs')
client.on('message', message => {
  if(message.channel.id != server) return;
   if(message.author.id != client.user.id) return;
                              

const messages = client.channels.cache.get(server).messages.cache.find(msg => msg.id == message.id)
if(!messages.embeds[0])return;
              if(!messages.embeds[0].footer.text.startsWith('ID :')) return;
const fileData = JSON.parse(fs.readFileSync(obj.plugins[0].cache))
fileData.push({ id: messages.id, embeds: [{footer: { text: messages.embeds[0].footer.text}}], author: { id: messages.author.id }})
fs.writeFileSync(obj.plugins[0].cache, JSON.stringify(fileData, null, 2));
})

}

module.exports = cacheFc;
