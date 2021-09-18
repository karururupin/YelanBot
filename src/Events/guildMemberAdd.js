const Event = require('../Structures/Event.js');

const Discord = require('discord.js');

module.exports = new Event('guildMemberAdd', (client, member) => {
    const channel = member.guild.channels.cache.find(c => c.name == "my-bot-testing");

    if(!channel) return;

    channel.send(`Welcome ${member.user}\nThank you for joining the server!`);
})