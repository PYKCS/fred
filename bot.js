const Discord = require('discord.js');
const PREFIX = "?"
//const YTDL = require("ytdl-core");

var client = new Discord.Client();
var servers = {};

client.on('ready', () => {
  client.user.setActivity('porn', {type: 'WATCHING'}, 'https://www.pornhub.com/view_video.php?viewkey=ph588434b815de9');
  console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  const logch = member.guild.channels.find(ch => ch.name = "log");
  const roleN = member.guild.roles.find(role => role.name = "EMen");
  if(!logch) return;
  logch.send(`Welcome to the server, ${member}`);
  member.addRole(roleN)
    .then(console.log)
    .catch(console.error);
})

client.on('message', async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(PREFIX) !== 0) return;
  const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const botch = message.guild.channels.find(ch => ch.name === 'bot');

  switch(command){
    case "help":
      botch.send(`${message.author}\n ?ping - latency test`);
      break;
    case "ping":
      const m = await botch.send("Ping?");
      m.edit(`${message.author} Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
      break;
    default:
      botch.send(`${message.author} - Invalid command (${message}), check ?help for the commands.`);
  }
});

client.login(process.env.TOKEN);
