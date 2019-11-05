const Discord = require("discord.js");
const Client = new Discord.Client();
 

Client.login('NjQwMjg5Nzc1MDEzNzI0MTYx.XcF3Qw.iG_FkkayUlgqKhjOIfHMyPTtHfw');
client.login(process.env.BOT_TOKEN);


Client.on('ready',  () => {
  console.log('=================');
  console.log('AUTHOR : SAFA7,PATRIC');
  console.log('=================');
  console.log('logged in as * [ " ${client.user.username} " ] SERVERS! [ " ${client.guilds.size');
  console.log('=================');
  console.log('Bot is on!');
  console.log('=================');
Client.user.setStatus("dnd");
});

// Playing
Client.on('ready', () => {
client.user.setGame(`*help  `,"http://twitch.tv/Death Shop")
});


Client.on('message', message => {
  if (message.content === "*help") {
message.author.send(""+ `  **

spoort as in https://discord.gg/N85Cbma 
and thx for use thes bot 
**`);
    }
});

