<h2>Plugin : Extend</h2>

### About
Extend the bot using the same client.

### Usage
 
```js
Modmail({
  ...
  plugins: [{
    extend: true,
   }]
   
   })
```

### Guide 

```js
(async () => {
const client = await Modmail({
       resolve: 'client' // To Resolve Client Only
       ...
       });
// example : Set Bot Status ( Activity ) 
client.user.setActivity('Message Me For Help !') 
// .... learn more at : https://discordjs.guide
 })();
```

### Note

- You have to use this in an `async/await` function or `.then()` callback.
- This plugin will be replace with something else in the future ( Major Update ).
- Learn more about what you can do with this on [discord.js guide](https://discordjs.guide).


