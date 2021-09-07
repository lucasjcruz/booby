const Command = require("../../structures/Command")
const { MessageEmbed } = require("discord.js")

const MTAClient = require('mtasa').Client;

const { ip, port, user, pass } = require('../../res/mta');

const mta = new MTAClient(ip, port, user, pass);

module.exports = class Status extends Command {
    constructor(client) {
        super(client, {
            name: "status",
            aliases: ["stats"],
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
            const result = await mta.resources.bob.discordRequest(command, admin);

            if (result !== null && typeof result === "object") {
                const { online, maxPlayers, serverName, serverIp, serverPort } = result;

                const embed = new MessageEmbed()
                    .color(this.client.colors.premium)
                    .setAuthor('Status of MTAServer')
                    .addFields({
                        name: 'Server Name',
                        value: serverName,
                        inline: true
                    }, {
                        name: 'Online Players',
                        value: `${online}/${maxPlayers}`,
                        inline: true
                    }, {
                        name: 'IP',
                        value: `mtasa://${serverIp}:${serverPort}`,
                    })

                
                message.channel.send(embed);
            }

        } catch (err) {
           message.reply('Error localized, check your console!')
           console.log(err);
        }
    }
}