/* eslint-disable import/no-default-export */
/* eslint-disable import/exports-last */
import type { ComponentStory, Meta } from "@storybook/react";

import { SearchInput } from "./SearchInput.index";

const meta: Meta<typeof SearchInput> = {
	title: "Componentes/Input/Search",
	component: SearchInput,
};

const Template: ComponentStory<typeof SearchInput> = props => (
	<SearchInput {...props} />
);

export const Default = Template.bind({});
Default.args = {
	placeholder: "Search...",
};

export default meta;
