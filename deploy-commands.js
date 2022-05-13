import fs from "fs";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { createRequire } from 'module';
import { Chalk } from 'chalk';

const require = createRequire(import.meta.url);
const { token, clientId } = require("./config.json");

const chalk = new Chalk();

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

console.log(" -- LOADING COMMANDS -- ");
for (const file of commandFiles) {
	const commandImport = await import(`./commands/${file}`);
	const command = commandImport.default;
    console.log(
        ` > ${chalk.blueBright(command.data.name)} loaded successfully!`
    );
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log(' > COMMANDS SUCCESSFULLY LOADED '))
	.catch(console.error);