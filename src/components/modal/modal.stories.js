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
		modal_num: {
			type: "number",
		},
		bg_color: {
			description: "Background color",
			table: { defaultValue: { summary: "white" } },
			control: {
				type: "radio",
				options: ["white", "black"],
			},
		},
		open_txt: {
			description: "Text for open button",
		},
		open_classes: {
			description: "CSS classes for open button",
		},
		content: {
			description: "Modal content",
		},
	},
	args: {
		modal_num: 123,
		bg_color: "white",
		open_txt: "Open Modal",
		open_classes: "btn btn--primary btn--md",
		content: "<h2 class='modal__heading'>Sample content for modal</h2>",
	},
};

const Template = ({ modal_num, bg_color, open_txt, open_classes, content }) =>
	TwigModal({ modal_num, bg_color, open_txt, open_classes, content });

export const Modal = Template.bind({});

export const ModalWhite = Template.bind({});

export const ModalBlack = Template.bind({});
ModalBlack.args = {
	bg_color: "black",
};
