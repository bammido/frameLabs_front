import React from "react";
import HomeCard from "../../Molecules/HomeCard/HomeCard";
import "./style.css";

export default function HomeSectionConteudo() {
	return (
		<>
			<div className="SectionCardsConteudo">
				<HomeCard descricao="serviços diponíveis" qtd="5" />
				<HomeCard descricao="Ordens de serviço concluídas" qtd="5" />
				<HomeCard descricao="Ordens de serviço canceladas" qtd="5" />
				<HomeCard descricao="Ordens de serviço em atividade" qtd={5} />
			</div>
		</>
	);
}
