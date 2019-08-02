module.exports = (client, member) => {
  const logch = client.channels.find(ch => ch.name === 'log');
  const roleN = member.guild.roles.find(role => role.name = "EMen");
  member.addRole(roleN);
}
