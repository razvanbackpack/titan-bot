import { SlashCommandBuilder } from "@discordjs/builders";
export default {
	data: new SlashCommandBuilder()
		.setName('slap')
		.setDescription('Give someone a well deserver slap!')
        .addUserOption(
            option => option
                        .setName('target')
                        .setDescription('The member to SLAP')
                        .setRequired(true)
        ),
	async execute(interaction) {
        const user = interaction.options.getUser('target');
		return interaction.reply({ content: `**DO YOU WANT A FUCKING SLAP ${user}?**`, ephemeral: false });
	},
};