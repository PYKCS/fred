exports.run = (client, message, args) => {
  const botch = client.channels.find(ch => ch.name === 'bot');
  botch.send(`${message.author}\n ?ping - latency test`);
}
