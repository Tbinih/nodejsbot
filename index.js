const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzI1MTY4MDI4OTUzODcwMzQ2.Xv1Hlg.hSAZT1Pwsb8g9u-gzYjY2FzaBuI';

client.on('ready', () => {
  console.log('봇 온라인.');
  client.user.setPresence({ game: { name: '!도움말을 쳐주세요!' }, status: 'online' })
});

client.on('message', (message) => {
  if(message.content === '!도움말') {
    message.reply('```!길드 마스터, !길드 서브 마스터``` (!전체공지[관리자전용])');
  }
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

  client.on('message', (message) => {
    if(message.content.startsWith('!전체공지')) {
      if(checkPermission(message)) return
      if(message.member != null) { // 채널에서 공지 쓸 때
        let contents = message.content.slice('!전체공지'.length);
        message.member.guild.members.array().forEach(x => {
          if(x.user.bot) return;
          x.user.send(`<@${message.author.id}> ${contents}`);
        });
    
        return message.reply('공지를 전송했습니다.');
      } else {
        return message.reply('채널에서 실행해주세요.');
      }
    }
  });

  function checkPermission(message) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
      return true;
    } else {
      return false;
    }
  }

client.login(token);
