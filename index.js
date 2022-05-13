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

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.cjs'));

for (const file of commandFiles) {
	const module = await import(`./commands/${file}`);
	const command = Object.create(module);
	console.log(module.default.data.name);
	
	// await import(`./commands/${file}`)
	// 	.then((module) => {
	// 		let x = new Object(module);
	// 		console.log(x);
	// 		// console.log(Object.create(module));
	// 	})
	// console.log(command.data);
	// client.commands.set(command.data.name, command);
}

// client.once('ready', () => {
//     console.log(chalk.greenBright('>>> Titan successfully loaded!'));
// });
// client.login(token);
// client.on('interactionCreate', async interaction => {
// 	if (!interaction.isCommand()) return;

// 	const command = client.commands.get(interaction.commandName);

// 	if (!command) return;

// 	try {
// 		await command.execute(interaction);
// 	} catch (error) {
// 		console.error(error);
// 		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
// 	}
// });

