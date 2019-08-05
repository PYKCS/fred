module.exports = (client, member) => {
  const role = member.guild.roles.find(role => role.name === "EMen");
  member.addRole(role);
}
