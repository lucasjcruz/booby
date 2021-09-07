const Client = require('./src/Client.js');
const Constants = require('./node_modules/discord.js/src/util/Constants.js');
const Discord = require('discord.js');
const client = new Client({
    fetchAllMembers: true
});

require('dotenv').config();

client.loadCommands('./src/commands');
client.loadEvents('./src/events');
client.login(process.env.TOKEN);