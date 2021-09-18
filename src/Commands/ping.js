const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: "ping",
    description: "shows the ping of the bot!",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {

        msg = message.reply(`Ping: ${client.ws.ping} ms`);
    }
});