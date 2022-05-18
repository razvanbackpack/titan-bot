/**
 * setup.js
 * @copyright CptBackpack https://github.com/CptBackpack
 * @author CptBackpack https://github.com/CptBackpack
 * @version 1.0
 *
 * 
 * This small setup file will create a config.json file
 */

import fs from "fs";
import { Chalk } from 'chalk';

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  
let chalk = new Chalk();
let configContents = '{ \
    "clientId": "",\
    "guildId": "",\
    "token": "",\
    "prefix":"!"\
}';

console.log(chalk.bgBlueBright('SETUP RUNNING'));
await fs.writeFile("./config.json", configContents, function(err) {
    if(err) {
        return console.log(
            chalk.redBright("ERROR!") + 'Could not create file ' + chalk.greenBright("config.json") + '. Please create it manually, using the contents from ' + chalk.greenBright("config-template.json")
        );
        
    }
    console.log(' > ' + chalk.greenBright("config.json") + ' successfully created.');
}); 


delay(1000).then(() => {
    console.log(chalk.bgBlueBright('SETUP DONE.'));
    console.log('--- Put your bot data in config.json.');
    console.log('--- After that, you can run ' + chalk.greenBright('npm start') + ' to start Titan');
});