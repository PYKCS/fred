module.exports = async client => {
  client.user.setActivity("people fuck", {
  type: "WATCHING"
});
  console.log('I am ready!');
};
