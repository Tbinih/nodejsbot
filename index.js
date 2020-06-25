const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzI1MTY4MDI4OTUzODcwMzQ2.XvSm_g.MUiyowN9lX0JETx7Q-uQRniQUww';

client.on('ready', () => {
  console.log('봇 온라인.');
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

  if(message.content.startsWith('!청소')) {
    if(checkPermission(message)) return

    var clearLine = message.content.slice('!청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @티빈이 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        const _limit = 10;
        let _cnt = 0;

        message.channel.fetchMessages({limit: _limit}).then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
});


  message.channel.send(embed)
} else if(message.content == 'embed2') {
  let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
  let commandList = [
    {name: 'ping', desc: '현재 핑 상태'},
    {name: 'embed', desc: 'embed 예제1'},
    {name: 'embed2', desc: 'embed 예제2 (help)'},
    {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
  ];

client.login(token);