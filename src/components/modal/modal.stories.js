import TwigModal from "./modal.twig";
import ModalSource from "!!raw-loader!./modal.twig";

import "./modal.js";

export default {
	title: "Components/Modal",
	parameters: {
		componentSource: {
			code: ModalSource,
			language: "twig",
		},
	},
	argTypes: {
		bg_color: {
			description: "Background color",
			table: { defaultValue: { summary: "white" } },
			control: {
				type: "radio",
				options: ["white", "black"],
			},
		},
	},
	args: {
		modal_id: "demoModal",
		bg_color: "white",
	},
};

const Template = ({ modal_id, bg_color }) => TwigModal({ modal_id, bg_color });

export const Modal = Template.bind({});

export const ModalWhite = Template.bind({});

export const ModalBlack = Template.bind({});
ModalBlack.args = {
	bg_color: "black",
};
