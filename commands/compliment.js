/**
 * compliment.js
 * @copyright CptBackpack https://github.com/CptBackpack
 * @author CptBackpack https://github.com/CptBackpack
 * @version 1.0
 *
 */
export class Command
{
	name = 'Compliment';
	command = 'compliment';
	description = '';
	usage = '';
	execute(args, message)
	{
		message.reply('Hey, ' + args[0] + '. You look amazing today!');
	}
}

