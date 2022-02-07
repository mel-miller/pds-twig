import TwigButton from "./button.twig";
import ButtonSource from "!!raw-loader!./button.twig";

export default {
	title: "Components/Button",
	parameters: {
		componentSource: {
			code: ButtonSource,
			language: "twig",
		},
	},
	argTypes: {
		text: {
			description: "Button text.",
			table: { defaultValue: { summary: "Button" } },
		},
		type: {
			description: "Type of button.",
			table: { defaultValue: { summary: "primary" } },
			control: {
				type: "radio",
				options: ["primary", "secondary", "tertiary", "ghost-purple", "ghost-white"],
			},
		},
		size: {
			description: "Size of button.",
			table: { defaultValue: { summary: "lg" } },
			control: {
				type: "radio",
				options: ["sm", "md", "lg"],
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
		text: "Button",
		type: "primary",
		size: "lg",
		disabled: false,
	},
};

const Template = ({ text, type, size, disabled }) =>
	TwigButton({
		text,
		type,
		size,
		disabled,
	});

export const Button = Template.bind({});

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
	text: "Button",
	type: "primary",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
	type: "secondary",
};

export const TertiaryButton = Template.bind({});
TertiaryButton.args = {
	type: "tertiary",
};

export const GhostPurpleButton = Template.bind({});
GhostPurpleButton.args = {
	type: "ghost-purple",
};

export const GhostWhiteButton = Template.bind({});
GhostWhiteButton.args = {
	type: "ghost-white",
};
GhostWhiteButton.parameters = {
	backgrounds: { default: "black" },
};
