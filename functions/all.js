module.exports = {
	Client: require("./js/client"),
	Commands: require("./js/cmds"),
	Embeds: require("./js/embeds"),
	Channels: require("./js/channels"),
	Guilds: require("./js/guilds"),
	Users: require("./js/users"),
	Other: require("./js/other"),
	TheBridge: require("./thebridge/thebridge"),
	Lovejoy: require("./lovejoy/song"),
	LG: {
		Embeds: require("./lg/embeds"),
		Game: require("./lg/game"),
		Interactions: require("./lg/interactions"),
		Players: require("./lg/players"),
		RoleActions: require("./lg/role_actions"),
		Roles: require("./lg/roles"),
		Vote: require("./lg/vote"),
	},
};
