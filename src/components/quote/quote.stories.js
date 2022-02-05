import TwigQuote from "./quote.twig";
import QuoteSource from "!!raw-loader!./quote.twig";

export default {
	title: "Quote",
	parameters: {
		componentSource: {
			code: QuoteSource,
			language: "twig",
		},
	},
	argTypes: {
		background_color: {
			description: "Background color",
			table: { defaultValue: { summary: "white" } },
			control: {
				type: "select",
				options: ["white", "light-grey", "black"],
			},
		},
	},
	args: {
		background_color: "white",
		quote_text:
			"Pantheon has all the stuff I’d be looking for in a WordPress host: awareness of the application stack, focus on scaling, CLI access, rsync, etc.",
		quote_attribution: "Andrew Nacin, Wordpress Lead Developer, The White House",
		image_dir: "img",
	},
};

const Template = ({ background_color, quote_text, quote_attribution, image_dir }) =>
	TwigQuote({ background_color, quote_text, quote_attribution, image_dir });

export const Quote = Template.bind({});

export const QuoteOnWhite = Template.bind({});
QuoteOnWhite.args = {
	background_color: "white",
};

export const QuoteOnGrey = Template.bind({});
QuoteOnGrey.args = {
	background_color: "light-grey",
};
QuoteOnGrey.parameters = {
	backgrounds: { default: "light-grey" },
};

export const QuoteOnBlack = Template.bind({});
QuoteOnBlack.args = {
	background_color: "black",
};
QuoteOnBlack.parameters = {
	backgrounds: { default: "black" },
};
