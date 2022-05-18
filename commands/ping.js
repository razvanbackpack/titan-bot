/**
 * ping.js
 * @copyright CptBackpack
 * @author CptBackpack
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

