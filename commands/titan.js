import { SlashCommandBuilder } from "@discordjs/builders";
export default {
	data: new SlashCommandBuilder()
		.setName('titan')
		.setDescription('About Titan.'),
	async execute(interaction) {
		const aboutEmbed = {
			color: 0x0099ff,
			title: 'Titan',
			url: 'https://discord.js.org',
			author: {
				name: 'Titan',
				icon_url: 'https://i.imgur.com/AfFp7pu.png',
				url: 'https://discord.js.org',
			},
			description: 'Some cool badass bot.',
			thumbnail: {
				url: 'https://i.imgur.com/AfFp7pu.png',
			},
			fields: [
				{
					name: 'More Details',
					value: 'Not yet',
				},
				{
					name: '\u200b',
					value: '\u200b',
					inline: false,
				},
				{
					name: 'Inline field title',
					value: 'Some value here',
					inline: true,
				},
				{
					name: 'Inline field title',
					value: 'Some value here',
					inline: true,
				},
				{
					name: '!Inline field title',
					value: 'Some value here',
					inline: false,
				},
			],
			image: {
				url: 'https://i.imgur.com/AfFp7pu.png',
			},
			timestamp: new Date(),
			footer: {
				text: '',
				icon_url: 'https://i.imgur.com/AfFp7pu.png',
			},
		};

		return interaction.reply({ embeds: [aboutEmbed] });
	}
};