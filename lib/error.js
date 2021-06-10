function error(obj, token, prefix, server){
   if(typeof obj != "object")throw new TypeError("Unknown Object")

    if(token == undefined || token == "")throw new TypeError("Please Provide A Token")

 if(prefix == undefined || prefix == "")throw new TypeError("Please Provide A Prefix")

  if(server == undefined || server == "")throw new TypeError("Please Provide An Inbox Channel ID")

  if(obj.inline){
    if(typeof obj.inline != 'boolean')throw new TypeError('inline : Unknown Boolean');

     if(obj.inline.length < 1)throw new TypeError("inline : Can't Be Empty Or Undefined");
  }

  if(obj.plugins){
    if(!Array.isArray(obj.plugins)) throw new TypeError("plugins : Unknown Array")
    if(typeof obj.plugins[0] != 'object') throw new TypeError("plugins : Unknown Object")

    const plugins = obj.plugins[0]
if(plugins.replyToReply){
  if(typeof plugins.replyToReply != 'boolean') throw new TypeError("plugins - ReplyToReply : Unknown Boolean")
}
  }

}
module.exports = error
