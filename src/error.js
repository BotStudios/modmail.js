function error(obj, token, prefix, server){

   if(typeof obj != "object")throw new TypeError("Unknown Object")
  if (obj.clientIntents == undefined) throw new TypeError("Please Provide An Array Of Privileged Intents.");
    if(token == undefined || token == "")throw new TypeError("Please Provide A Token")

 if(prefix == undefined || prefix == "")throw new TypeError("Please Provide A Prefix")

  if(server == undefined || server == "")throw new TypeError("Please Provide An Inbox Channel ID")

  

  if(obj.plugins){
    if(!Array.isArray(obj.plugins)) throw new TypeError("plugins : Unknown Array")
    if(typeof obj.plugins[0] != 'object') throw new TypeError("plugins : Unknown Object")

    const plugins = obj.plugins[0]
if(plugins.replyToReply){
  if(typeof plugins.replyToReply != 'boolean') throw new TypeError("plugins - ReplyToReply : Unknown Boolean")
}
if(plugins.cache){
  if(typeof plugins.cache != 'string') throw new TypeError("plugins - Cache : Unknown File _Dir")
}
if(plugins.mongodb){
  if(typeof plugins.mongodb != 'string') throw new TypeError("plugins - MongoDB : Please Provide A Valid MongoDB URI");
  if(typeof obj.category != 'string') throw new TypeError("plugin - MongoDB : Please Provide A Thread Category ID");
  if(typeof obj.roleID != 'string') throw new TypeError("plugin - MongoDB : Please Provide A Support Role ID")
}
  }
  

}
module.exports = error
