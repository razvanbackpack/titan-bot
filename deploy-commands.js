import fs from "fs";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { createRequire } from 'module';
import { Chalk } from 'chalk';

const require = createRequire(import.meta.url);
const { token, clientId, guildId } = require("./config.json");

const chalk = new Chalk();

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

console.log(" -- LOADING COMMANDS -- ");
const rest = new REST({ version: '9' }).setToken(token);

await rest.put(Routes.applicationCommands(clientId), { body: [] })
	.then(() => console.log(' > OLD COMMANDS SUCCESSFULLY RENOVED '))
	.catch(console.error);

for (const file of commandFiles) {
	const commandImport = await import(`./commands/${file}`);
	const command = commandImport.default;
    console.log(
        ` > ${chalk.blueBright(command.data.name)} loaded successfully!`
    );
	commands.push(command.data.toJSON());
}


rest.get(Routes.applicationGuildCommands(clientId, guildId))
    .then(data => {
        const promises = [];
        for (const command of data) {
            const deleteUrl = `${Routes.applicationGuildCommands(clientId, guildId)}/${command.id}`;
            promises.push(rest.delete(deleteUrl));
        }
        return Promise.all(promises);
    });


rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

// rest.put(Routes.applicationCommands(clientId), { body: commands })
// 	.then(() => console.log(' > COMMANDS SUCCESSFULLY LOADED '))
// 	.catch(console.error);