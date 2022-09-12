import type { LoginTemplateProps } from "./LoginTemplate.types";

import { CompanyBanner } from "../CompanyBanner/CompanyBanner.index";
import * as S from "./LoginTemplate.styled";

export const LoginTemplate: React.FC<LoginTemplateProps> = ({ children }) => {
	return (
		<S.Container>
			<CompanyBanner />
			{children}
		</S.Container>
	);
};
