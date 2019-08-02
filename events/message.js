module.exports = (client, message) => {
  const PREFIX = "?"
  // Ignore all bots
  if (message.author.bot) return;

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(PREFIX) !== 0) return;

  if (message.content.toLowerCase.includes("egirl" || "e-girl")) {
    var attach = new Discord.Attachment("https://i.imgur.com/BiDmISV.png");
    message.channel.send(message.author, attach);
    return;
  }
  
  if (message.content.toLowerCase.includes("halloween" || "spooky")) {
    var attach = new Discord.Attachment("https://i.imgur.com/H7pbHu0.jpg");
    message.channel.send(message.author, attach);
    return;
  }
  // Our standard argument/command name definition.
  const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) {
    message.channel.send(`${message.author} - Invalid command (${message}), check ?help for the commands.`);
    return;
  }

  // Run the command
  cmd.run(client, message, args);
  message.delete();
};
