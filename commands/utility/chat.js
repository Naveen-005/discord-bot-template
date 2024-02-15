const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chat')
		.setDescription('Chat with gpt!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('input message for gpt')
				.setRequired(true)),
	async execute(interaction) {
		const input = interaction.options.getString('input');
		console.log(input)
		await interaction.reply('gpt request received');
	},
};