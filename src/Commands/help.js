const Command = require("../Structures/Command.js");
const Discord = require('discord.js');

module.exports = new Command({
    name: "help",
    description: "send a list of existing commands",
    permission: "SEND_MESSAGES",
    
    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        
        embed.setTitle('YelanBot List of existing commands')
            .setColor('#b4f0dd')
            .setDescription("-hello\n -math\n -ms\n -ping\n -yatta");

        message.reply({embeds: [embed]});
    }
})