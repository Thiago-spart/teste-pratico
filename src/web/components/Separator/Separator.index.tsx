import type { SeparatorProps } from "./Separator.types";

import * as S from "./Separator.styled";

export const Separator: React.FC<SeparatorProps> = ({ children }) => {
	return (
		<S.Container>
			<span>{children}</span>
		</S.Container>
	);
};
