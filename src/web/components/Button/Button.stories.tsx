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
	children: "Primary",
	type: "button",
};

export default meta;
