import * as S from "./CompanyBanner.styled";

export const CompanyBanner: React.FC = () => {
	return (
		<S.Container>
			<img src="/logo.svg" alt="Agenda consulta logo" />

			<S.AdvantagesContainer>
				<span>1000+ clínicas</span>
				<span>12.000+ laboratórios</span>
				<span>500+ farmácias</span>
			</S.AdvantagesContainer>

			<p>e com descontos para você!</p>

			<img src="/how-works-removebg-preview-1.png" alt="mobile showcase" />
		</S.Container>
	);
};
