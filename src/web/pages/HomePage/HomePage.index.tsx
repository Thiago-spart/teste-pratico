/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { FC } from "react";

import { CompanyBanner } from "./components/CompanyBanner/CompanyBanner.index";
import { LoginScreen } from "./components/LoginScreen/LoginScreen.index";

import * as S from "./HomePage.styled";

export const HomePage: FC = () => {
	return (
		<S.Container>
			<S.LoginCardContainer>
				<CompanyBanner />
				<LoginScreen />
			</S.LoginCardContainer>
		</S.Container>
	);
};
