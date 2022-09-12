import styled from "styled-components";

import type { ButtonProps } from "./Button.types";

import { fonts } from "styles/fonts";

type ButtonStyleProps = Omit<ButtonProps, "children">;

const themeBackgroundColor: Record<ButtonProps["schema"], string> = {
	outlined: "transparent",
	unstyled: "transparent",
	primary: "var(--primary)",
};

const themeBorderColor: Record<ButtonProps["schema"], string> = {
	outlined: "var(--dark)",
	unstyled: "transparent",
	primary: "var(--background-color)",
};

const themeTextColor: Record<ButtonProps["schema"], string> = {
	outlined: "var(--text-color)",
	unstyled: "#222222",
	primary: "var(--softy-text-color)",
};

export const ButtonStyle = styled.button<ButtonStyleProps>`
	${fonts.text4}
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2.4rem 4.9rem;
	width: ${({ isFullWidth }) => isFullWidth && "100%"};
	border-radius: 0.8rem;
	border: 1px solid;
	background-color: ${({ schema }) =>
		schema ? themeBackgroundColor[schema] : themeBackgroundColor.primary};
	border-color: ${({ schema }) =>
		schema ? themeBorderColor[schema] : themeBorderColor.primary};
	color: ${({ schema }) =>
		schema ? themeTextColor[schema] : themeTextColor.primary};

	transition: 0.2s;
	cursor: pointer;

	&:focus-visible {
		box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
		outline: none;
	}

	&:hover:not(:disabled) {
		filter: brightness(0.8);
	}

	&:disabled {
		cursor: default;
		filter: grayscale(100%);
	}
`;
