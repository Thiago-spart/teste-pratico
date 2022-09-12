import type { FC, InputHTMLAttributes } from "react";
import { BiSearch } from "react-icons/bi";

import * as S from "./SearchInput.styled";

export const SearchInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
	type = "search",
	...rest
}) => {
	return (
		<S.Container>
			<S.SearchInputStyle type={type} {...rest} />
			<BiSearch />
		</S.Container>
	);
};
