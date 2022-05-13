// const fs = require('node:fs');
import fs from "fs";
// const { REST } = require('@discordjs/rest');
import { REST } from "discord.js/rest";
import { Routs } from "discord-api-types/v9";
// const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');


const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

console.log(" -- LOADING COMMANDS -- ");
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    console.log(
        ` > ${command.data.name} loaded successfully!`
    );
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log(' > COMMANDS SUCCESSFULLY LOADED '))
	.catch(console.error);