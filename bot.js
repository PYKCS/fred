const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "!"
const YTDL = require("ytdl-core");

var servers = {};

function play(connection, message){
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
  server.queue.shift();
  server.dispatcher.on("end", function(){
    if (server.queue[0]) play(connection, message)
    else connection.disconnect();
  });
}

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  member.addRole(member.guild.roles.find("name", "EMen"));
  member.guild.channel.find("ch", "bot").send("```\nSet role of @" + member.id.toString() + " to " + member.guild.roles.find("name", "EMen").toString() + "\n```");
})

client.on('message', message => {
  if(message.author.equals(bot.user)) return;
  if(!message.content.startsWith(PREFIX)) return;
  var args = message.content.substring(PREFIX.length).split(" ");
  var botch = message.channel.find("ch", "bot");

  switch(args[0].toLowerCase()){
    case "ping":
      botch.send("@" + message.member.id.toString() + ": Pong.");
      break;
    /*case "play":
      if(!args[1]){
        botch.send("@" + message.member.id.toString() + ": You must provide a link.");
        return;
      }
      if (!message.member.voiceChannel){
        botch.send("@" + message.member.id.toString() + ": You must be in a voice channel.");
        return;
      }
      if(!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
      };
      var server = servers[message.guild.id];
      server.queue.push(args[1]);
      if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
        play(connection, message);
      )};
      break;
    case "skip":
      var server = servers[message.guild.id];
      if(server.dispatcher) server.dispatcher.end();
      botch.send("@" + message.member.id.toString() + ": Skipped.");
      break;
    case "stop":
      var server = servers[message.guild.id];
      if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
      botch.send("@" + message.member.id.toString() + ": Stopped.");
      break;*/
    default:
      botch.send("@" + message.member.id.toString() + ": Invalid command, type !help for a list of commands.");
  }

});

client.login(process.env.BOT_TOKEN);
