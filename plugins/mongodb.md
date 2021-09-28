<h2>Plugin : MongoDb</h2>

### About
Bring the modmail bot to the next level with the help of [mongoose](https://npmjs.com/mongoose) using [MongoDb](https://mongodb.com).

### Usage
 
```js
Modmail({
  ...
  category: 'THREAD_CATEGORY_ID',
  roleID: 'MODMAIL_STAFF_ID',
  plugins: [{
    mongodb: 'MONGODB://URL', // MongoDB URI
   }]
   
   })
```

### Setup 

1. Create A MongoDB Account If You Haven't Already / Or Use Local
2. Create A Cluster And Get A Database URI / Or Use Local
3. Replace `MONGODB://URL` With Your Database URI, `THREAT_CATEGORY_ID` With A Modmail Category ID And `MODMAIL_STAFF_ID` With Modmail Staff Role ID.

### Guide

Here's A List Of Commands That Will Be Added If This Plugin Was Enabled
```
* <PREFIX>delete - Delete/Close A Threat Channel
```

The Bot Will Create A New Channel In The Modmail Category Everytime A User Messages The Bot, And That Channel Can Only Be Used To Interact With The User. Modmail Staff Can Reply To The User In The Threat Channel Without Having To Run The Reply Command. Use `<PREFIX>delete` When You Feel Like Its Time To Close The Threat.

### Note

- The Plugin [ReplyToReply](https://modmail.js.org/plugins/replyToReply) Will Not Work If This Plugin Is Enable Since Its Not Necessary.
- This Plugin Will Create A Seperate Channel For Each User That Interacts With The Bot.


