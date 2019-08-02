module.exports = async client => {
  client.user.setActivity("jj", {
  type: "WATCHING"
});
  console.log('I am ready!');
};
