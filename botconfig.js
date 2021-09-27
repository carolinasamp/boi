module.exports = {
  Admins: ["277100502599335937", "408105766135005184"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.PREFIX || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  Token: process.env.TOKEN || "",
  ClientID: process.env.DISCORD_CLIENT_ID || "",
  ClientSecret: process.env.DISCORD_CLIENT_SECRET || "",
  Scopes: ["identify", "guilds", "applications.commands"],
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "x1 Lixo", //A Secret like a password
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.WEBSITE || "0.0.0.0", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
  Lavalink: {
    id: "Main",
    host: process.env.HOST,
    port: parseInt(process.env.PORT) || 80,
    pass: process.env.PASSWORD,
    retryAmount: 30,
    retryDelay: 3000,
    secure: false // Set this to true if you're self-hosting lavalink on replit.
  },

  // https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.SPOTIFY_CLIENT_ID || "",
    ClientSecret: process.env.SPOTIFY_CLIENT_SECRET || ""
  }
};
