module.exports = (client, member) => {
  const logch = member.guild.channels.find(ch => ch.name = "log");
  const roleN = member.guild.roles.find(role => role.name = "EMen");
  defaultChannel.send(`Welcome ${member.user} to this server.`).catch(console.error);
  if(!logch) return;
  logch.send(`Welcome to the server, ${member}`);
  member.addRole(roleN)
    .then(console.log)
    .catch(console.error);
}
