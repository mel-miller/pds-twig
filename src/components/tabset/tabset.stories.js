import TwigTabset from "./tabset.twig";
import TabsetSource from "!!raw-loader!./tabset.twig";

import "./tabset.js";

export default {
	title: "Components/Tabset",
	parameters: {
		componentSource: {
			code: TabsetSource,
			language: "twig",
		},
	},
	argTypes: {},
	args: {
		title: "The title of this tabset",
		tabs: {
			1: {
				id: "001",
				title: "Tab 1",
				content:
					"Test content for tab 1. I'm baby aesthetic knausgaard trust fund, yuccie before they sold out normcore street art. Mustache everyday carry DIY quinoa locavore raclette semiotics chambray. Flexitarian blog sriracha shabby chic asymmetrical single-origin coffee pop-up chambray helvetica vice. Waistcoat tumblr hammock, fam post-ironic put a bird on it swag snackwave. Chambray kinfolk selvage copper mug. Pop-up try-hard la croix post-ironic deep v vape brunch pok pok edison bulb vice.",
			},
			2: {
				id: "002",
				title: "Tab 2",
				content:
					"Test content for tab 2. Bespoke pitchfork poutine, tumblr lumbersexual flannel wolf try-hard. Iceland master cleanse YOLO tbh chillwave jean shorts, stumptown street art selfies prism tacos fixie poke. Yr normcore tumblr hammock typewriter chia cardigan keytar. Leggings hashtag chia vape live-edge.",
			},
			3: {
				id: "003",
				title: "Tab 3",
				content:
					"Test content for tab 3. Actually celiac art party kinfolk, fixie pitchfork brunch vexillologist twee tousled stumptown tilde fam vice photo booth. Four dollar toast af wayfarers butcher hell of microdosing marfa.",
			},
			4: {
				id: "004",
				title: "Tab 4",
				content:
					"Test content for tab 4. Taxidermy succulents aesthetic, truffaut offal kinfolk stumptown pork belly hell of put a bird on it live-edge mustache.",
			},
			5: {
				id: "005",
				disabled: true,
				title: "Tab 5",
				content:
					"Test content for tab 5. Shoreditch retro actually selvage celiac activated charcoal try-hard. Schlitz swag roof party pok pok la croix.",
			},
		},
	},
};

const Template = ({ title, tabs }) => TwigTabset({ title, tabs });

export const Tabset = Template.bind({});

export const TabsetTwo = Template.bind({});
TabsetTwo.args = {
	title: "The title of this tabset",
	tabs: {
		1: {
			id: "201",
			title: "Tab 1",
			content:
				"Test content for tab 1. I'm baby aesthetic knausgaard trust fund, yuccie before they sold out normcore street art. Mustache everyday carry DIY quinoa locavore raclette semiotics chambray. Flexitarian blog sriracha shabby chic asymmetrical single-origin coffee pop-up chambray helvetica vice. Waistcoat tumblr hammock, fam post-ironic put a bird on it swag snackwave. Chambray kinfolk selvage copper mug. Pop-up try-hard la croix post-ironic deep v vape brunch pok pok edison bulb vice.",
		},
		2: {
			id: "202",
			title: "Tab 2",
			content:
				"Test content for tab 2. Bespoke pitchfork poutine, tumblr lumbersexual flannel wolf try-hard. Iceland master cleanse YOLO tbh chillwave jean shorts, stumptown street art selfies prism tacos fixie poke. Yr normcore tumblr hammock typewriter chia cardigan keytar. Leggings hashtag chia vape live-edge.",
		},
	},
};

export const TabsetThree = Template.bind({});
TabsetThree.args = {
	title: "The title of this tabset",
	tabs: {
		1: {
			id: "301",
			title: "Tab 1",
			content:
				"Test content for tab 1. I'm baby aesthetic knausgaard trust fund, yuccie before they sold out normcore street art. Mustache everyday carry DIY quinoa locavore raclette semiotics chambray. Flexitarian blog sriracha shabby chic asymmetrical single-origin coffee pop-up chambray helvetica vice. Waistcoat tumblr hammock, fam post-ironic put a bird on it swag snackwave. Chambray kinfolk selvage copper mug. Pop-up try-hard la croix post-ironic deep v vape brunch pok pok edison bulb vice.",
		},
		2: {
			id: "302",
			title: "Tab 2",
			content:
				"Test content for tab 2. Bespoke pitchfork poutine, tumblr lumbersexual flannel wolf try-hard. Iceland master cleanse YOLO tbh chillwave jean shorts, stumptown street art selfies prism tacos fixie poke. Yr normcore tumblr hammock typewriter chia cardigan keytar. Leggings hashtag chia vape live-edge.",
		},
		3: {
			id: "303",
			title: "Tab 3",
			content:
				"Test content for tab 3. Actually celiac art party kinfolk, fixie pitchfork brunch vexillologist twee tousled stumptown tilde fam vice photo booth. Four dollar toast af wayfarers butcher hell of microdosing marfa.",
		},
	},
};

export const TabsetFour = Template.bind({});
TabsetFour.args = {
	title: "The title of this tabset",
	tabs: {
		1: {
			id: "401",
			title: "Tab 1",
			content:
				"Test content for tab 1. I'm baby aesthetic knausgaard trust fund, yuccie before they sold out normcore street art. Mustache everyday carry DIY quinoa locavore raclette semiotics chambray. Flexitarian blog sriracha shabby chic asymmetrical single-origin coffee pop-up chambray helvetica vice. Waistcoat tumblr hammock, fam post-ironic put a bird on it swag snackwave. Chambray kinfolk selvage copper mug. Pop-up try-hard la croix post-ironic deep v vape brunch pok pok edison bulb vice.",
		},
		2: {
			id: "402",
			title: "Tab 2",
			content:
				"Test content for tab 2. Bespoke pitchfork poutine, tumblr lumbersexual flannel wolf try-hard. Iceland master cleanse YOLO tbh chillwave jean shorts, stumptown street art selfies prism tacos fixie poke. Yr normcore tumblr hammock typewriter chia cardigan keytar. Leggings hashtag chia vape live-edge.",
		},
		3: {
			id: "403",
			title: "Tab 3",
			content:
				"Test content for tab 3. Actually celiac art party kinfolk, fixie pitchfork brunch vexillologist twee tousled stumptown tilde fam vice photo booth. Four dollar toast af wayfarers butcher hell of microdosing marfa.",
		},
		4: {
			id: "404",
			title: "Tab 4",
			content:
				"Test content for tab 4. Taxidermy succulents aesthetic, truffaut offal kinfolk stumptown pork belly hell of put a bird on it live-edge mustache.",
		},
	},
};

export const TabsetFive = Template.bind({});
TabsetFive.args = {
	title: "The title of this tabset",
	tabs: {
		1: {
			id: "501",
			title: "Tab 1",
			content:
				"Test content for tab 1. I'm baby aesthetic knausgaard trust fund, yuccie before they sold out normcore street art. Mustache everyday carry DIY quinoa locavore raclette semiotics chambray. Flexitarian blog sriracha shabby chic asymmetrical single-origin coffee pop-up chambray helvetica vice. Waistcoat tumblr hammock, fam post-ironic put a bird on it swag snackwave. Chambray kinfolk selvage copper mug. Pop-up try-hard la croix post-ironic deep v vape brunch pok pok edison bulb vice.",
		},
		2: {
			id: "502",
			title: "Tab 2",
			content:
				"Test content for tab 2. Bespoke pitchfork poutine, tumblr lumbersexual flannel wolf try-hard. Iceland master cleanse YOLO tbh chillwave jean shorts, stumptown street art selfies prism tacos fixie poke. Yr normcore tumblr hammock typewriter chia cardigan keytar. Leggings hashtag chia vape live-edge.",
		},
		3: {
			id: "503",
			title: "Tab 3",
			content:
				"Test content for tab 3. Actually celiac art party kinfolk, fixie pitchfork brunch vexillologist twee tousled stumptown tilde fam vice photo booth. Four dollar toast af wayfarers butcher hell of microdosing marfa.",
		},
		4: {
			id: "504",
			title: "Tab 4",
			content:
				"Test content for tab 4. Taxidermy succulents aesthetic, truffaut offal kinfolk stumptown pork belly hell of put a bird on it live-edge mustache.",
		},
		5: {
			id: "505",
			title: "Tab 5",
			content:
				"Test content for tab 5. Shoreditch retro actually selvage celiac activated charcoal try-hard. Schlitz swag roof party pok pok la croix.",
		},
	},
};
