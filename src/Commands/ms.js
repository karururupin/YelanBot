const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: "ms",
    description: "Shows the bot latency!",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {

        msg = message.reply(`Ping: ${client.ws.ping} ms`);
    }
});