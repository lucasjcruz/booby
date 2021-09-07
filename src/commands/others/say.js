const Command = require("../../structures/Command")
const { MessageEmbed } = require("discord.js")

const MTAClient = require('mtasa').Client;

const { ip, port, user, pass } = require('../../res/mta');

const mta = new MTAClient(ip, port, user, pass);

module.exports = class Say extends Command {
    constructor(client) {
        super(client, {
            name: "say",
            aliases: ["text"],
            category: "others",
            userPermission: null,
            clientPermission: null,
            dev: true
        })
    }

    async run(message, args) {
        try {
            let command = this.config.name
            let admin = `${message.member.displayName}#${message.author.discriminator}`;
            let text = args.join(' ')

            const result = await mta.resources.bob.discordRequest(command, admin, text)
            message.reply(result);

        } catch (err) {
           message.reply('Error localized, check your console!')
           console.log(err);
        }
    }
}