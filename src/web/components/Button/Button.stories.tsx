/* eslint-disable import/no-default-export */
/* eslint-disable import/exports-last */
import type { ComponentStory, Meta } from "@storybook/react";

import { Button } from "./Button.index";

const meta: Meta<typeof Button> = {
	title: "Componentes/Button",
	component: Button,
};

const Template: ComponentStory<typeof Button> = props => <Button {...props} />;

export const Primary = Template.bind({});
Primary.args = {
	children: "Button",
	schema: "primary",
	type: "button",
	isFullWidth: false,
	disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
	children: "Button",
	schema: "outlined",
	type: "button",
	isFullWidth: false,
	disabled: false,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
	children: "Button",
	schema: "primary",
	type: "button",
	isFullWidth: true,
	disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: "Button",
	schema: "primary",
	type: "button",
	isFullWidth: false,
	disabled: true,
};

export default meta;
