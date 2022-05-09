const WorkDetails = [
	{
		id: 1,
		title: "Sleep With Me",
		subtitle: "Sleep timer for your Mac",
		description:
			"Do you like to fall asleep listening to music or podcasts? Or maybe you like to watch some YouTube or Netflix. You can use Sleep With Me to set a timer after which your mac will pause your music or video and put your mac to sleep.",
		platforms: ["macOS", "Web"],
		languages: ["Swift"],
		links: [
			{ type: "website", link: "https://www.an23lm.me/sleepwithme" },
			{ type: "github", link: "https://www.github.com/an23lm/sleepwithme" },
			{
				type: "appstore",
				link: "https://apps.apple.com/in/app/sleep-with-me/id1396421003?mt=12",
			},
		],
		images: [
			{ url: "images/sleepwithme/m1.webp" },
			{ url: "images/sleepwithme/m2.webp" },
		],
	},
	{
		id: 2,
		title: "Tea-Plates.js",
		subtitle: "Another javascript templating engine",
		description:
			"Tea-Plates accepts JSON and a creates a templating string from the provided JSON Object.",
		platforms: ["Web"],
		languages: ["Javascript", "HTML", "CSS"],
		links: [
			{ type: "github", link: "https://github.com/an23lm/tea-plates.js" },
		],
		images: [
			{
				url: "https://user-images.githubusercontent.com/5507600/167162338-a3bf53a2-4130-4707-939a-367eda62a901.gif",
			},
		],
	},
	{
		id: 3,
		title: "Moderno",
		subtitle:
			"An open source, simple, powerful, and modern implementation of tables for the web.",
		description:
			"Table Moderno was custom built for CBREX Pvt. Ltd. as there was no open source solution for the tabulation reqirements we had. Table Moderno was built for small to medium sized data-sets, with an empasis on ease of extensible.",
		platforms: ["Web"],
		languages: ["JavaScript", "HTML", "CSS"],
		links: [
			{ type: "github", url: "https://github.com/an23lm/Table-Moderno/" },
		],
		images: [
			{
				url: "https://user-images.githubusercontent.com/5507600/167161309-1bdbe776-5a58-4b12-b348-83a7c4c7f7b0.png",
			},
		],
	},
	{
		id: 4,
		title: "HRate",
		subtitle: "Real time heart rate overlay",
		description:
			"With HRate you will be able to stream your heart rate from your Apple Watch to your desktop. Video game streamers can now use HRate to further engage their audience.",
		platforms: ["watchOS", "Web"],
		languages: ["Swift"],
		links: [
			{ type: "website", link: "https://www.an23lm.me/hrate" },
			{ type: "github", link: "https://github.com/H-Rate" },
		],
		images: [{ url: "images/hrate/h1.webp" }, { url: "images/hrate/h2.webp" }],
	},
];

export default WorkDetails;
