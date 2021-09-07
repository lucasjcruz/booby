const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = class MessageEvent {
    constructor(client) {
        this.client = client
    }

    async run(message) {

        const prefix = process.env.PREFIX

        if (message.channel.type === "dm") return
        if (message.author.bot) return
        if (!message.content.startsWith(prefix)) return

        const args = message.content.slice(prefix.length).trim().split(" ")
        const command = args.shift().toLowerCase()
        const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command))

        if (!cmd) return
        if(cmd.config.dev) {
            if (!this.client.config.owner.some(owner => message.author.id === owner)) return
        }

        let userPerms = cmd.config.userPermission
        let clientPerms = cmd.config.clientPermission
        
        if (userPerms !== []) {
            if (!message.member.hasPermission(userPerms)) return message.reply(`você não possuí a permissão necessaria, permissão necessaria para uso: ${userPerms.map(value => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase().replace(/_/g, " ")).join(", ")}`)
        }

        if (clientPerms !== []) {
            if (!message.guild.me.hasPermission(clientPerms)) return message.reply(`Eu não tem permssão para \`${clientPerms.map(value => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase().replace(/_/g, " ")).join(", ")}\``)
          }

          try {

            new Promise((res, rej) => {
                res(cmd.run(message, args))
            }).catch(err => {
                message.reply("Ocorreu um erro!")
                console.log(err.stack)
            })
          } catch (err) {
              console.log(err.stack)
          }
        
    }
}