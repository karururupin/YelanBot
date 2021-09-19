const Command = require('../Structures/Command.js');
const Math = require('mathjs');
const Discord = require('discord.js');

module.exports = new Command({
    name: "math",
    description: "shows the ping of the bot!",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {

        var expression = args.join(' ');
        expression = expression.replace('math ','');
        const embed = new Discord.MessageEmbed();
        
        try {
            var solution = Math.evaluate(expression);
            embed.setColor('#b4f0dd')
                .addField('Question', `${expression}`)
                .addField('Solution',`${solution}`);

            message.reply({ embeds: [embed]});
            
        } catch (err) {

            message.reply(`${expression} is not a valid expression!`);
        }
    }
});