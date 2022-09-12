/* eslint-disable import/no-default-export */
/* eslint-disable import/exports-last */
import type { ComponentStory, Meta } from "@storybook/react";

import { Separator } from "./Separator.index";

const meta: Meta<typeof Separator> = {
	title: "Componentes/Separator",
	component: Separator,
};

const Template: ComponentStory<typeof Separator> = props => (
	<Separator {...props} />
);

export const Default = Template.bind({});
Default.args = {
	children: <span>ou</span>,
};

export default meta;
