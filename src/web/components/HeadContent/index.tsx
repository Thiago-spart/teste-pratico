import type { FC } from "react";

import { SITE } from "configs/site";

export const HeadContent: FC = () => (
	<>
		<meta name="keywords" content="consulta saúde medico assistência" />
		<meta name="robots" content="index,follow" />
		<meta
			name="description"
			content="Agenda Consulta possui os melhores profissionais para te ajudar no que você precisar"
		/>
		<meta
			name="og:description"
			content="Agenda Consulta possui os melhores profissionais para te ajudar no que você precisar"
		/>
		<meta
			name="og:image"
			content="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
		/>
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="ForecastThi" />
		<meta
			name="twitter:description"
			content="Agenda Consulta possui os melhores profissionais para te ajudar no que você precisar"
		/>
		<meta name="og:site_name" content={SITE.name} />
		<meta name="og:url" content={SITE.url} />
		<meta name="og:locale" content="pt_BR" />
		<link rel="cannonical" href={SITE.url} />
	</>
);
