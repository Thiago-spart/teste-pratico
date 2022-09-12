import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import * as stories from "./SearchInput.stories";

const { Default } = composeStories(stories);

describe("Button component", () => {
	it("should match snapshot", () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});

	it("should be filled up", () => {
		render(<Default />);

		const inputElement = screen.getByPlaceholderText("Search...");

		userEvent.type(inputElement, "London");

		expect(screen.findByText("London")).toBeTruthy();
	});
});
