/**
 * deploy-commands.js
 * @copyright CptBackpack
 * @author CptBackpack
 * @version 1.0
 *
 */

import fs from "fs";
import { Chalk } from 'chalk';

const chalk = new Chalk();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

let commandsList = [];

console.log(" -- LOADING COMMANDS -- ");

for (const file of commandFiles) {

    const commandImport = await import(`./commands/${file}`);
    const commandObj = new commandImport.Command();

    var obj = {};
    obj['command'] = commandObj.command;
    obj['object'] = commandObj;

    commandsList.push(obj);
}

export default commandsList;