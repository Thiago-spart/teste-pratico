import type { ButtonProps } from "./Button.types";

import * as S from "./Button.styled";

export const Button: React.FC<ButtonProps> = ({
	children,
	schema = "primary",
	...rest
}) => {
	return (
		<S.ButtonStyle schema={schema} {...rest}>
			{children}
		</S.ButtonStyle>
	);
};
