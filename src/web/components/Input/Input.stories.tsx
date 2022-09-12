/* eslint-disable import/no-default-export */
/* eslint-disable import/exports-last */
import type { ComponentStory, Meta } from "@storybook/react";

import Input from "./Input.index";

const meta: Meta<typeof Input> = {
	title: "Componentes/Input",
	component: Input,
};

const Template: ComponentStory<typeof Input> = props => <Input {...props} />;

export const Default = Template.bind({});
Default.args = {
	placeholder: "Text Input",
	label: "Text Input",
};

export default meta;
