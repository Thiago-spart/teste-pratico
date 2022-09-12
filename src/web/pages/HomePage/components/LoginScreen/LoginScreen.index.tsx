import { Button } from "web/components/Button/Button.index";
import Input from "web/components/Input/Input.index";
import { Separator } from "web/components/Separator/Separator.index";

import * as S from "./LoginScreen.styled";

export const LoginScreen: React.FC = () => {
	return (
		<S.Container>
			<h1>Bem-vindo a Agenda Consulta!</h1>

			<S.LoginFormContainer>
				<Input name="user_name" label="E-mail ou telefone" type="text" />
				<Input name="user_password" label="Senha" type="password" />

				<S.ButtonContainer>
					<Button schema="unstyled" type="button">
						Esqueceu sua senha?
					</Button>
					<Button schema="primary" type="submit">
						Fazer login
					</Button>
				</S.ButtonContainer>

				<Separator>ou</Separator>

				<h2>Crie uma conta e faça parte de uma revolução da saúde.</h2>

				<Button schema="outlined" type="button">
					Criar uma conta
				</Button>
			</S.LoginFormContainer>
		</S.Container>
	);
};
