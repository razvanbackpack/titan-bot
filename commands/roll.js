import { SlashCommandBuilder } from "@discordjs/builders";
export default {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Roll some dice!')
        .addStringOption(
            option => option
                .setName('dice')
                .setDescription('What kind of dice should I roll? (d4, d6, d8, etc...)')
                .setRequired(true)
        )
        .addNumberOption(
            option => option
                .setName('many')
                .setDescription('What kind of dice should I roll? (d4, d6, d8, etc...)')
                .setRequired(true)
        )
        .addNumberOption(
            option => option
                .setName('modifier')
                .setDescription('Extra modifier to add to each of the rolls.')
                .setRequired(true)
        ),
	async execute(interaction) {
        const diceType = interaction.options.getString('dice');
        const many = interaction.options.getString('many');
        const modifier = interaction.options.getInteger('modifier');
		return interaction.reply({ content: `**Will roll  ${many} x ${diceType} with ${modifier} bonus.**`, ephemeral: false });
	},
};