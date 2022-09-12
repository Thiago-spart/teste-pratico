import { composeStories } from "@storybook/testing-react";
import { fireEvent, render, screen } from "@testing-library/react";

// import userEvent from "@testing-library/user-event";

import * as stories from "./Button.stories";

const { Primary } = composeStories(stories);

describe("Button component", () => {
	it("should match snapshot", () => {
		const { container } = render(<Primary />);

		expect(container).toMatchSnapshot();
	});

	it("should be clicked", () => {
		const onClickMock = jest.fn();
		render(<Primary onClick={onClickMock} />);

		const buttonElement = screen.getByText("Primary");

		fireEvent.click(buttonElement);

		expect(onClickMock).toBeCalled();
	});
});
