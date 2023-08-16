/**
 * roll.js
 * @copyright CptBackpack https://github.com/CptBackpack
 * @author CptBackpack https://github.com/CptBackpack
 * @version 1.0
 *
 */

export class Command
{
	name = 'Roll';
	command = 'roll';
	description = '';
	usage = '';
	execute(args, message)
	{
		if(!args.length) {
			message.reply('```!roll d<diceType> <times_optional> <modifier_optional>```')
		} else {
			var diceType = args[0];
			var times = args[1] ?? 1;
			var modifier = args[2] ?? 0;
			var total = 0;
			if (args[0][0] === 'd') {
				diceType = args[0].substring(1);
			}
			
			var finalMessage = 'Rolls [d'+diceType+' x ' + times + ' + ' +modifier+']: \n';
			for(let i = 0; i < times; i++) {
				var currentRoll = Math.floor(Math.random() * (diceType - 1) + 1);
				var currentTotal = parseInt(currentRoll) + parseInt(modifier);
				total += currentTotal;

				finalMessage += ' :game_die: ' + currentTotal + ' [' + currentRoll + ' + ' + modifier + '] \n';
			}

			finalMessage += '**TOTAL: ' + total + '**';

			message.reply(finalMessage);
		}
	}
}

