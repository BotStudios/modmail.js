const plugins = (Discord, client, server, obj, prefix, resolve, resolveItem) => {
  const logger = [];
  var extend;
if(obj.plugins){
  obj.plugins.forEach((x) => {
    require(x)(client, Discord);
  });
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
