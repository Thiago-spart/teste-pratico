import styled from "styled-components";

import { fonts } from "styles/fonts";

export const Container = styled.section`
	display: none;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 40%;
	background-color: var(--primary);
	color: var(--softy-text-color);
	padding-top: 5.6rem;
	border-radius: 1.8rem 0 0 1.8rem;

	img:first-child {
		margin-bottom: 11rem;
	}

	span,
	p {
		${fonts.text2}
		font-weight: 700;
		max-width: 45rem;
	}

	p {
		margin-bottom: 1.2rem;
	}

	@media screen and (min-width: 1122px) {
		display: flex;
	}
`;

export const AdvantagesContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 2rem;
`;
