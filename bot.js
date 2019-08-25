const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("613151313185865731")
setInterval(function() {
channel.send(`لا اله الا الله محمد رسول الله `);
}, 30)
})

client.login(process.env.BOT_TOKEN);