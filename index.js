/**
 * index.js
 * @copyright CptBackpack
 * @author CptBackpack
 * @version 1.0
 *
 */

import { Chalk } from 'chalk';
import { Client } from 'discord.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { token } = require("./config.json");
const chalk = new Chalk();

console.log(chalk.bgBlackBright("Titan booting up..."));
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] });

const commands = await import('./deploy-commands.js');
const prefix = "!";
client.on("messageCreate", function (message)
{

	if (!message.content.startsWith(prefix)) return;
	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const receivedCommand = args.shift().toLowerCase();


	// TODO: figure out a better way of handling which command gets fired
	commands.default.forEach((command) => {
		if(command.command === receivedCommand) {
			command.object.execute(args, message);
			
		}
	})
});


client.once('ready', () =>
{
	console.log(chalk.greenBright('>>> Titan successfully loaded!'));
});
client.login(token);

