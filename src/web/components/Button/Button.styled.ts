import styled from "styled-components";

interface ButtonStyleProps {
	schema: "primary" | "secondary";
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.2rem 1rem;
	font-weight: 300;
	font-size: 1.6rem;
	line-height: 2rem;
	letter-spacing: 0.15rem;
	border-radius: 0.75rem;
	border: none;
	color: #fafafa;
	background: #323232;
	transition: 0.2s;
	cursor: pointer;

	&:focus-visible {
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		outline: none;
	}

	&:hover {
		filter: brightness(0.8);
	}
`;
