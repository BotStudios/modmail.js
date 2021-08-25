const { Intents, Modmail } = require('modmail.js');

(async () => {
const mail = await Modmail({ 
  token: 'BOT_TOKEN',
  inbox: 'INBOX_CHANNEL_ID',
  prefix: 'BOT_PREFIX',
  clientIntents: [
    Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES
  ],
  resolve: 'EVENTS',
  message: '@here',
  category: 'THREAD_CATEGORY_ID',
  roleID: 'MODMAIL_STAFF_ID',
  plugins: [{ // plugins : https://modmail.js.org/plugins
   cache: './FileName.json', // cache : https://modmail.js.org/plugins/cache
   replyToReply: true, // replyToReply : https://modmail.js.org/plugins/replyToReply
   extend: true, // extend : https://modmail.js.org/plugins/extend
   mongodb: 'MONGODB://URL' // mongodb : https://modmail.js.org/plugins/mongodb
  }]
  
  });

console.log(mail);

})()

