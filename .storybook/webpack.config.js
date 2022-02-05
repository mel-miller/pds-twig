const path = require("path");

module.exports = async ({ config }) => {
	// Twig
	config.module.rules.push({
		test: /\.twig$/,
		use: "twig-loader",
	});

	return config;
};
