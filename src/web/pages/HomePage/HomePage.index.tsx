/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { FC } from "react";
import { useState } from "react";

import { CreateAccount } from "./components/CreateAccount/CreateAccount.index";
import { LoginScreen } from "./components/LoginScreen/LoginScreen.index";
import { LoginTemplate } from "./components/LoginTemplate/LoginTemplate.index";

import * as S from "./HomePage.styled";

export const HomePage: FC = () => {
	const [isCreatingNewAccount, setIsCreatingNewAccount] = useState(false);

	const toggleCreateNewAccount = () => {
		setIsCreatingNewAccount(!isCreatingNewAccount);
	};

	return (
		<S.Container>
			<LoginTemplate>
				{isCreatingNewAccount ? (
					<CreateAccount redirectToCreateAccount={toggleCreateNewAccount} />
				) : (
					<LoginScreen redirectToCreateAccount={toggleCreateNewAccount} />
				)}
			</LoginTemplate>
		</S.Container>
	);
};
