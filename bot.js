const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(` Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === 'repme'){
        message.channel.send('#rep <@321268713183772683>')
    }
});


client2.on('message', message => {
    if(message.content === 'repme'){
        message.channel.send('#rep <@321268713183772683>')
    }
});



client3.on('message', message => {
    if(message.content === 'repme'){
        message.channel.send('#rep <@321268713183772683>')
    }
});



client4.on('message', message => {
    if(message.content === 'repme'){
        message.channel.send('#rep <@321268713183772683>')
    }
});



client.on("message", message => {
  if (message.author.id != "321268713183772683") return;
  if (message.content.split(' ')[0] == 'Ksay') {
    message.delete();
    message.channel.sendMessage(message.content.substr(5));
  }
});



client2.on("message", message => {
  if (message.author.id != "321268713183772683") return;
  if (message.content.split(' ')[0] == 'Ksay') {
    message.delete();
    message.channel.sendMessage(message.content.substr(5));
  }
});



client3.on("message", message => {
  if (message.author.id != "321268713183772683") return;
  if (message.content.split(' ')[0] == 'Ksay') {
    message.delete();
    message.channel.sendMessage(message.content.substr(5));
  }
});



client4.on("message", message => {
  if (message.author.id != "321268713183772683") return;
  if (message.content.split(' ')[0] == 'Ksay') {
    message.delete();
    message.channel.sendMessage(message.content.substr(5));
  }
});



client.on('message', message => { 
if (message.content === 'Kspam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**wxy Spam **[ #" ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client2.on('message', message => { 
if (message.content === 'Kspam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**wxy Spam **[ #" ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});



client3.on('message', message => {
if (message.content === 'Kspam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**wxy Spam **[ #" ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});



client4.on('message', message => {
if (message.content === 'Kspam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**wxy Spam **[ #" ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN2);
client3.login(process.env.BOT_TOKEN3);
client4.login(process.env.BOT_TOKEN4);
