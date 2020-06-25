const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'process.env.token';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '!길드 마스터') {
    message.reply('T빈이');
  }
});

client.on('message', (message) => {
    if(message.content === '!길드 서브 마스터') {
      message.reply('현아J, l율윤l');
    }
  });

client.login(token);