const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "hello",
    description: "Hello!",
    permission: "SEND_MESSAGES",
    
    async run(message, args, client) {
        message.reply('Hello! <:YelanSwag_Karupin:888553391666647060>');
    }
})