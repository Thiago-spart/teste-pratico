import type { ButtonProps } from "./Button.types";

import * as S from "./Button.styled";

export const Button: React.FC<ButtonProps> = ({
	children,
	schema = "primary",
	isFullWidth = false,
	...rest
}) => {
	return (
		<S.ButtonStyle isFullWidth={isFullWidth} schema={schema} {...rest}>
			{children}
		</S.ButtonStyle>
	);
};
