/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { FC } from "react";

import { Button } from "web/components/Button/Button.index";
import Input from "web/components/Input/Input.index";
import { Separator } from "web/components/Separator/Separator.index";

import type { CreateAccountProps } from "./CreateAccount.types";

import * as S from "./CreateAccount.styled";

export const CreateAccount: FC<CreateAccountProps> = ({
	redirectToCreateAccount,
}) => {
	return (
		<S.Container>
			<h1>Bem-vindo a Agenda Consulta!</h1>

			<S.LoginFormContainer>
				<Input name="user_complete_name" label="Nome completo" type="text" />
				<Input name="user_cpf" label="CPF" type="text" />
				<Input name="user_email" label="E-mail" type="email" />
				<Input name="user_whatsapp" label="WhatsApp" type="tel" />
				<Input name="user_password" label="Senha" type="password" />
				<Input name="repeat_password" label="Repita a senha" type="password" />

				<Button schema="primary" type="submit">
					Criar nova conta
				</Button>
			</S.LoginFormContainer>

			<Separator>ou</Separator>

			<h2>Já possui cadastro?</h2>

			<Button schema="outlined" type="button" onClick={redirectToCreateAccount}>
				Fazer login
			</Button>
		</S.Container>
	);
};
