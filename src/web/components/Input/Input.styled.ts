import styled from "styled-components";

import { fonts } from "styles/fonts";

interface ContainerProps {
	error: boolean;
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1.6rem;
	width: 100%;
	flex-direction: column;
	/* color: ${({ error }) => error && "var(--danger)"}; */

	/* input {
		border-color: ${({ error }) => (error ? "var(--danger)" : "var(--dark)")};
	} */
`;

export const CustomLabel = styled.label`
	${fonts.text4}
	font-weight: 400;
`;

export const InputStyle = styled.input`
	color: var(--text-color);
	border: 1px solid var(--input-border-color);
	border-radius: 0.8rem;
	padding: 2.4rem;
	width: 100%;
	transition: 0.2s;

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type="number"] {
		-moz-appearance: textfield;
	}

	&:focus-visible {
		outline: none;
		box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
	}
`;
