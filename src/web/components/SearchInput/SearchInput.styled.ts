import styled from "styled-components";

export const Container = styled.label`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: relative;
	width: 100%;

	svg {
		position: absolute;
		font-size: 2.2rem;
		pointer-events: none;
		top: 12px;
		left: 10px;
	}
`;

export const SearchInputStyle = styled.input`
	font-weight: 300;
	font-size: 1.6rem;
	line-height: 2rem;
	letter-spacing: 0.15rem;
	border-radius: 0.75rem;
	padding: 1.2rem 1rem 1.2rem 4rem;
	transition: 0.2s;
	width: 100%;

	&:focus-visible {
		outline: none;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}

	&[type="search"]::-webkit-search-cancel-button {
		-webkit-appearance: none;
		height: 1.8rem;
		width: 1.8rem;
		border-radius: 50%;
		background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)
			no-repeat 50% 50%;
		background-size: contain;
		opacity: 0;
		pointer-events: none;
	}

	&[type="search"]:focus::-webkit-search-cancel-button {
		opacity: 0.6;
		pointer-events: all;
		cursor: pointer;
	}
`;
