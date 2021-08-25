const plugins = (Discord, client, server, obj, prefix, resolve, resolveItem) => {
  const logger = [];
  var extend;
if(obj.plugins){
  const plugin = obj.plugins[0];
const cache = plugin.cache;
 if(plugin.replyToReply == true){
 logger.push('Modmail.js : [ ReplyToReply ] Plugin Activated');
   require('./plugins/reply.js')(client, server, obj, cache);
 }
  if(typeof plugin.cache == 'string'){
 logger.push('Modmail.js : [ Cache ] Plugin Activated');
   require('./plugins/cache.js')(client, server, obj, cache);
 }
 if(typeof plugin.mongodb == 'string'){
   logger.push('Modmail.js : [ Mongodb ] Plugin Activated');
   require('./plugins/mongodb.js')(client, server,obj, cache, Discord)

 }
  if(typeof plugin.extend == 'boolean'){
   if(plugin.extend == true){
   extend = true;
} 
 }

}
 var resolveObj;
 if(resolveItem == 'client'){
  resolveObj = client; 
}else if(resolveItem == 'plugin'){
  resolveObj = logger[0] ? logger.join('\n') : null;
}else {
  if(extend == true){
    resolveObj = { client: client, plugins: logger ? logger.join('\n') : null }
  }else {
    resolveObj = logger[0] ? logger.join('\n') : null;
  }
}
resolve(resolveObj)
}
module.exports = plugins;
