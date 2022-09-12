import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import * as stories from "./Input.stories";

const { Default } = composeStories(stories);

describe("Button component", () => {
	it("should match snapshot", () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});

	it("should be filled up", () => {
		render(<Default />);

		const inputElement = screen.getByPlaceholderText("Text Input");

		userEvent.type(inputElement, "London");

		expect(screen.findByText("London")).toBeTruthy();
	});
});
