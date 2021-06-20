const modmail = require('modmail.js') 

modmail.on({ 
  token: 'BOT_TOKEN', 
  inbox: 'INBOX_CHANNEL_ID', 
  prefix: 'BOT_PREFIX', 
  message: '@mentions/messages', 
  inline: true, // inlineReply
  
  plugins: [{ // plugins : https://modmail.js.org/plugins
     replyToReply: true, // replyToReply : https://modmail.js.org/plugins/replyToReply
     cache: './FileName.json', // cache : https://modmail.js.org/plugins/cache
  }],  
  })
  .then(r=>{ 
  console.log(r) // resolve ( success )
  }).catch(err => {
  console.log(err) // reject ( errors )
  })

// Learn More At https://modmail.js.org
