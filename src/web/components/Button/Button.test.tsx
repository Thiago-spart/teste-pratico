/* eslint-disable sonarjs/no-duplicate-string */
import { composeStories } from "@storybook/testing-react";
import { fireEvent, render, screen } from "@testing-library/react";

import * as stories from "./Button.stories";

const { Primary, Disabled, FullWidth, Outlined } = composeStories(stories);

describe("Button component", () => {
	it("should match snapshot", () => {
		const { container } = render(<Primary />);

		expect(container).toMatchSnapshot();
	});

	it("should be clicked", () => {
		const onClickMock = jest.fn();
		render(<Primary onClick={onClickMock} />);

		const buttonElement = screen.getByText("Button");

		fireEvent.click(buttonElement);

		expect(onClickMock).toBeCalled();
	});

	it("shouldn't be clicked when disabled", () => {
		const onClickMock = jest.fn();
		render(<Disabled onClick={onClickMock} />);

		const buttonElement = screen.getByText("Button");

		fireEvent.click(buttonElement);

		expect(onClickMock).not.toBeCalled();
	});

	describe("Outlined Button", () => {
		it("should match snapshot", () => {
			const { container } = render(<Outlined />);

			expect(container).toMatchSnapshot();
		});
	});

	describe("FullWidth Button", () => {
		it("should match snapshot", () => {
			const { container } = render(<FullWidth />);

			expect(container).toMatchSnapshot();
		});
	});
});
