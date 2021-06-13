const plugins = (Discord, client, server, obj, prefix, resolve) => {
  const logger = []
if(obj.plugins){
  const plugin = obj.plugins[0]
const cache = plugin.cache
 if(plugin.replyToReply == true){
 logger.push('Modmail.js : [ ReplyToReply ] Plugin Activated')
   require('./plugins/reply.js')(client, server, obj, cache)
 }
  if(typeof plugin.cache == 'string'){
 logger.push('Modmail.js : [ Cache ] Plugin Activated')
   require('./plugins/cache.js')(client, server, obj, cache)
 }
 resolve(logger.join('\n'))
 }
}
module.exports = plugins
