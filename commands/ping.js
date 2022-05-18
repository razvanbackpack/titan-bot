/**
 * ping.js
 * @copyright CptBackpack https://github.com/CptBackpack
 * @author CptBackpack https://github.com/CptBackpack
 * @version 1.0
 *
 */

export class Command
{
	name = 'Ping';
	command = 'ping';
	description = '';
	usage = '';
	execute(args, message)
	{
		message.reply('pong');
	}
}

