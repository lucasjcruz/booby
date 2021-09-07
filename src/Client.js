const { Client, Collection } = require('discord.js');
const { readdir } = require('fs');
require('dotenv').config();

module.exports = class Booby extends Client {
    constructor(options = {}) {
        super(options);

        this.commands = new Collection();
        this.aliases = new Collection();
        this.config = require('./res/config.json');
        this.colors = require('./util/colors');
        this.emotes = require('./util/emotes');
    }

    login(token) {
        super.login(token);
        return this;
    }

    loadCommands(path) {
        readdir(path, (err, f) => {
            if (err) return console.error(err.stack)
            f.forEach(category => {
                readdir(`./${path}/${category}`, (err, cmd) => {
                    cmd.forEach(cmd => {
                        const command = new(require(`.${path}/${category}/${cmd}`))(this)
                        this.commands.set(command.config.name, command)
                        command.config.aliases.forEach(alias => this.aliases.set(alias, command.config.name))
                        console.info('[COMMAND]', `'${cmd}' is loaded!`)
                    });
                });
            });
        });
    }

    loadEvents(path) {
        readdir(path, (err, f) => {
            if (err) return console.error(err.stack)
            f.forEach(events => {
                const event = new(require(`../${path}/${events}`))(this)
                super.on(events.split(".")[0], (...args) => event.run(...args))
                console.info('[EVENT]', `'${events}' is loaded!`)
            });
        });
        return this;        
    }
}