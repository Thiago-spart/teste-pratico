import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
	width: 100%;
	position: relative;

	&::before,
	&::after {
		position: absolute;
		width: 45%;
		height: 2px;
		background-color: #e0e0e0;
		content: "";
	}

	&::before {
		right: 0;
	}

	&::after {
		left: 0;
	}
`;
