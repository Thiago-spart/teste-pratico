/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { FC } from "react";
import { useState } from "react";

import { LoginScreen } from "./components/LoginScreen/LoginScreen.index";
import { LoginTemplate } from "./components/LoginTemplate/LoginTemplate.index";

import { CreateAccount } from "../CreateAccount/CreateAccount.index";
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
					<CreateAccount />
				) : (
					<LoginScreen redirectToCreateAccount={toggleCreateNewAccount} />
				)}
			</LoginTemplate>
		</S.Container>
	);
};
