import styled from "styled-components";

import { fonts } from "styles/fonts";

export const Container = styled.section`
	height: 100%;
	width: 100%;
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
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media screen and (min-width: 1024px) {
		justify-content: space-between;
		flex-direction: row;
	}
`;
