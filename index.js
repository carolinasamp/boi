require("dotenv").config();
const DiscordBoi = require("./structures/DiscordBoi");
const client = new DiscordBoi();

console.log(client);
client.build();

module.exports = client;
