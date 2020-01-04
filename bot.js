const Discord = require ('discord.js');
const bot = new Discord.Client();

const token = 'NjYyNzA0ODg3ODc1ODk1MzE2.Xg96-g.g8pbRBDx0kG8svjh8mO7CTzLWg4';

bot.on('ready', () =>{
    console.log('This bot is online!')
    bot.user.setActivity('making coffee ♡')
})

bot.login(process.env.BOT_TOKEN);
