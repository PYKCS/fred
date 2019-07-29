exports.run = (client, message, args) => {
  const botch = message.guild.channels.find(ch => ch.name === 'bot');
  botch.send(`${message.author}\n ?ping - latency test`);
}
