/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { FC } from "react";

import { CompanyBanner } from "./components/CompanyBanner/CompanyBanner.index";

import * as S from "./HomePage.styled";

export const HomePage: FC = () => {
	return (
		<S.Container>
			<S.LoginCardContainer>
				<CompanyBanner />
				<div>form</div>
			</S.LoginCardContainer>
		</S.Container>
	);
};
