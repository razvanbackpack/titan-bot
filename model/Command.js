/**
 * Command.js
 * @copyright CptBackpack https://github.com/CptBackpack
 * @author CptBackpack https://github.com/CptBackpack
 * @version 1.0
 *
 * 
 * This is not meant to be used anywhere in the code. 
 * This is merely a piece of code to be used as a template
 * for when you create a new command.
 */

export default class Command
{
    name = '';
    command = '';
    description = '';
    usage = '';

    execute(args)
    {
        throw new Error("Method 'execute(args)' must be implemented.");
    }

}