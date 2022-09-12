import styled from "styled-components";

import { fonts } from "styles/fonts";

export const Container = styled.main`
	max-height: 90.4rem;
	width: 100%;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 3.5rem 2.3rem 3.7rem 3.5rem;

	h1 {
		${fonts.text1}
		margin-bottom: clamp(4rem, 1vw, 8rem);
	}

	h2 {
		${fonts.text3}
		font-weight: 500;
		margin-top: clamp(3rem, 1vw, 6.1rem);
		margin-bottom: clamp(2rem, 1vw, 2.8rem);
	}

	@media screen and (min-width: 1024px) {
		padding: 7.7rem 5.6rem 7.9rem 7.7rem;

		h1 {
			margin-bottom: 10rem;
		}
	}
`;

export const LoginFormContainer = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 3.6rem;
	margin-bottom: clamp(4rem, 1vw, 8rem);

	& > button {
		align-self: flex-end;
		justify-self: flex-end;
	}
`;
