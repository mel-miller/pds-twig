const Twig = require("twig");
const { addDrupalExtensions } = require("drupal-twig-extensions/twig");

// Add the extensions for Drupal.
addDrupalExtensions(Twig);

import "../public/css/main.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		default: "white",
		values: [
			{
				name: "white",
				value: "#fff",
			},
			{
				name: "light-grey",
				value: "#f1f1f1",
			},
			{
				name: "black",
				value: "#000",
			},
			{
				name: "yellow",
				value: "#FFDC28",
			},
			{
				name: "brani",
				value: "#3017A1",
			},
		],
	},
};
