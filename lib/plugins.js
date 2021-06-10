const reply = require('./plugins/reply.js')
const plugins = (Discord, client, server, obj, prefix, resolve) => {
if(obj.plugins){
  const plugin = obj.plugins[0]

 if(plugin.replyToReply == true){
resolve('Modmail.js : [ ReplyToReply ] Plugin Activated')
   reply(client, server, obj)
 }
 }
}
module.exports = plugins
