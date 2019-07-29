const Discord = require('discord.js');
const PREFIX = "!"
//const YTDL = require("ytdl-core");

var client = new Discord.Client();

var servers = {};
//var botch = bot.channels.find(name => name === "bot");

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if(message.author.equals(bot.user)) return;
  //if(!message.content.startsWith(PREFIX)) return;
  //var args = message.content.substring(PREFIX.length).split(" ");
  if(message.content == "hello"){
    message.channel.send("hi");
  }
  //switch(args[0].toLowerCase()){
  //  case "ping":
  //    botch.send("Pong.");
  //    break;
  //  default:
  //    botch.send("Invalid command, type !help for a list of commands.");
  //}
});

client.login(process.env.BOT_TOKEN);
