/* eslint-disable sonarjs/no-duplicate-string */
import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";

import * as stories from "./Separator.stories";

const { Default } = composeStories(stories);

describe("Button component", () => {
	it("should match snapshot", () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});
});
