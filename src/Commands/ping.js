const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: "ping",
    description: "Ping and Pong!",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {

        msg = message.reply(':ping_pong:');
    }
});