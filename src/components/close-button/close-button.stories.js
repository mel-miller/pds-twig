import TwigCloseButton from "./close-button.twig";
import CloseButtonSource from "!!raw-loader!./close-button.twig";

export default {
	title: "Components/Close Button",
	parameters: {
		componentSource: {
			code: CloseButtonSource,
			language: "twig",
		},
	},
	argTypes: {
		color: {
			description: "Color of X",
			table: { defaultValue: { summary: "black" } },
			control: {
				type: "radio",
				options: ["black", "white"],
			},
		},
		disabled: {
			description: "Is button disabled.",
			table: { defaultValue: { summary: "false" } },
			control: {
				type: "boolean",
			},
		},
	},
	args: {
		color: "black",
		disabled: false,
	},
};

const Template = ({ color, disabled }) => TwigCloseButton({ color, disabled });

export const CloseButton = Template.bind({});

export const CloseButtonBlack = Template.bind({});

export const CloseButtonWhite = Template.bind({});
CloseButtonWhite.args = {
	color: "white",
};
CloseButtonWhite.parameters = {
	backgrounds: { default: "black" },
};
