/**
 * compliment.js
 * @copyright CptBackpack https://github.com/CptBackpack
 * @author CptBackpack https://github.com/CptBackpack
 * @version 1.0
 *
 */
export class Command
{
	name = 'Hate';
	command = 'hate';
	description = '';
	usage = '';
	execute(args, message)
	{
		message.reply('Hey, ' + args[0] + '. You fucking suck! :middle_finger:');
	}
}

