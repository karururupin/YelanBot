const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: "purge",
    description: "purge/delete an amount of messsages specified",
    permission: "MANAGE_MESSAGES",
    async run(message,args,client) {
        const amount = args[1];
        if(!amount || isNaN(amount)) return message.reply(`${amount == undefined ? "Nothing" : amount} is not a valid input`);

        const amountParsed = parseInt(amount);

        if(amountParsed > 100 ) return message.channel.send('Can not purge more than 100 messages');

        message.channel.bulkDelete(amountParsed);
        const gif = await message.channel.send('https://media.discordapp.net/attachments/812046719159894047/888946680244895764/Honkai-EdgeOfTaixuan.gif');
        const msg = await message.channel.send(`Purged ${amountParsed} messages! <:YelanSwag_Karupin:888553391666647060>`);

        setTimeout(() => gif.delete(), 4000);
        setTimeout(() => msg.delete(), 4000);
    }
})