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
        const msg = await message.channel.send(`Purged ${amountParsed} messages!`);

        setTimeout(() => msg.delete(), 1000);
    }
})