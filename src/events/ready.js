const { Client } = require('discord.js');
let client = new Client();

const MTAClient = require('mtasa').Client;
const { ip, port, user, pass } = require('../res/mta');
const mta = new MTAClient(ip, port, user, pass);

module.exports = class ReadyEvent {
    constructor(client) {
        this.client = client
    }

    async run() {

        console.log(`${this.client.user.username} it's on!`)

        client = this.client
        let stats = [
            {name: 'Booby constructor', type: 'PLAYING'},
            {name: 'github.com/lucasjcruz', type: 'PLAYING'}
        ];

        function Status () {
        let status = stats[Math.floor(Math.random() * stats.length)];
        client.user.setPresence({ activity: status });
        }
        Status()
        setInterval(() => Status, 4000)
    }
}