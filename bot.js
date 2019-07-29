const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '?'
const YTDL = require("ytdl-core");

//---------------------------------------------------- SONG QUEUE FUNCTION ------------------------------------------------------------------------\\
/*function play(connection, message){
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

  server.queue.shift();

  server.dispatcher.on("end", function() {
    if(server.queue[0]) play(connection, message);
    else connection.disconnect();
  });
}*/

var bot = new Discord.Client();

var servers = {};

bot.on('ready', () => {
  console.log('Hey, its Fred!');
})

/*bot.on('guildMemberAdd', member => {
  member.addRole(member.guild.roles.find(name => name.name === 'EMen'));
  const channel = member.guild.channels.find(ch => ch.name === 'log');
  if(!channel) return;
  channel.send(`Welcome to the server, ${member}`);
})*/

bot.on('message', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().includes('halloween')){
    const attachment = new Discord.Attachment("https://i.imgur.com/H7pbHu0.jpg");
    message.reply(attachment);
  }

  if (message.content.toLowerCase().includes('egirl' || 'e-girl')){
    const attachment = new Discord.Attachment("https://i.imgur.com/BiDmISV.png");
    message.reply(attachment);
  }

  if (!message.content.startsWith(PREFIX)) return;

  message.delete();

  var botchat = message.member.guild.channels.find(ch => ch.name === 'bot');

  var args = message.content.substring(PREFIX.length).split(" ");
  // ------------------------------------------------------------------ COMMANDS -------------------------------------------------------------------------------------------\\
  switch(args[0].toLowerCase()) {
    case "help":
      botchat.send("```\nCommands:\n?help : you just used it retard\n?ping : sends Pong!\n?play : plays the provided link\n?skip : skips the currently playing link\n?stop : stops the queue completely\n```");
      break;
    case "ping":
      botchat.send("```\nPong!\n```");
      break;
    /*case "play":
      if (!args[1]){
        botchat.send("```\nPlease provide a link for me to play.\n```");
        return;
      }

      if (!message.member.voiceChannel){
        botchat.send("```\nYou must be in a voice channel.\n```");
        return;
      }

      botchat.send("```\n" + args[1] +" added to queue.```");

      if (!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
      };

      var server = servers[message.guild.id];

      server.queue.push(args[1]);

      if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
      })
      break;
    case "skip":
      var server = servers[message.guild.id];
      if(server.dispatcher) server.dispatcher.end();
      botchat.send("```\nSkipped.\n```");
      break;
    case "stop":
      var server = servers[message.guild.id];
      if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
      botchat.send("```\nStopped.\n```");
      break;*/
    default:
      botchat.send("```\nInvalid command, type ?help to see a list of commands.\n```");
  }
})

client.login(process.env.BOT_TOKEN);
