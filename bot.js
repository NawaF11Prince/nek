const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 
  console.log(`Loggen in As ${client.user.username}`)
 client.user.setGame(`Medoo "https://twitch.tv/MeDoo")
 client.user.setStatus(`Idle`)
});

client.on('message',async message => {
  if(message.content === '+banall') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('❌|**\`KICK_MEMBERS\`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.ban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Succes!", "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455")
        .setDescription(`**:white_check_mark: Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم تبنيد  الجميع بواسطة** : <@${message.author.id}>`) 
  });
  });
  }
  });


client.login(process.env.BOT_TOKEN);
