import styled from "styled-components";

import { fonts } from "styles/fonts";

export const Container = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 7.7rem 5.6rem 7.9rem 7.7rem;

	h1 {
		${fonts.text1}
		margin-bottom: 10rem;
	}

	h2 {
		${fonts.text3}
		font-weight: 500;
	}
`;

export const LoginFormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 3.6rem;
`;

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;
