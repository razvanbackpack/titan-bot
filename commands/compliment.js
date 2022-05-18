/**
 * compliment.js
 * @copyright CptBackpack
 * @author CptBackpack
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

