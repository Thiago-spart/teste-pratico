import styled from "styled-components";

export const Container = styled.main`
	padding: clamp(4rem, 1vw, 6rem);
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const LoginCardContainer = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	width: 100%;
	background-color: var(--card-background-color);
	border-radius: 1.8rem;
`;
