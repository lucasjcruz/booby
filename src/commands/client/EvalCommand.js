const Command = require("../../structures/Command")
const { MessageEmbed } = require("discord.js")
module.exports = class Eval extends Command {
    constructor(client) {
        super(client, {
            name: "eval",
            aliases: ["ev", "e"],
            category: "client",
            userPermission: null,
            clientPermission: null,
            dev: true
        })
    }

    async run(message, args) {
        try {
            let util = require("util");
            let code = args.join(' ');
            let ev = eval(code)
            let str = util.inspect(ev, {
                depth: 1
            })
            str = `${str.replace(new RegExp(`${this.client.token}`, "g"), "Você não é um dos meus desenvolvedores, se não saberia qual comando que da para ver o token...")}`;
            if (str.length > 1800) {
                str = str.substr(0, 1800)
                str = str + "..."
            }
            message.channel.send(str, { code: 'js' });
            message.channel.send(typeof ev);

        } catch (err) {
          
           console.log(err.stack);
        }
    }
}