import fs from "fs";
import { Chalk } from 'chalk';
import { Client, Collection, Intents } from 'discord.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { token, guildId } = require("./config.json");

const chalk = new Chalk();
console.log(chalk.bgBlackBright("Titan booting up..."));
const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS //find out wtf is this
    ] 
});

await import("./deploy-commands.js");

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const commandImport = await import(`./commands/${file}`);
	const command = commandImport.default;
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log(chalk.greenBright('>>> Titan successfully loaded!'));
});
client.login(token);
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

