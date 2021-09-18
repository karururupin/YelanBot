const Event = require('../Structures/Event.js');

module.exports = new Event('messageCreate', (client,message) => {
    // if(message.content == '<:YelanSwag:888587315402915860>' && !message.author.bot) {
    //     message.channel.messages.fetch({limit: 3}).then(messages => {
    //         messages.every
    //     })
    // }

    if(!message.content.startsWith(client.prefix)) return;
	const args = message.content.substring(client.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);
	if(!command) return message.reply(`${args[0]} is not a valid command!`);

    const permission = message.member.permissions.has(command.permission);
    if(!permission) return message.reply(`You dont have the permission \`${command.permission}\` to run this command!`);

	command.run(message, args, client);
})