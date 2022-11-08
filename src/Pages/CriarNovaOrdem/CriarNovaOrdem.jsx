import React from "react";
import PageTitle from "../../Atoms/PageTitle";
import NovaOrdemForm from "../../Organisms/NovaOrdemForm/NovaOrdemForm";
import LoggedInTemplate from "../../Templates/LoggedIn/LoggedIn";
import "./style.css";

export default function CriarNovaOrdem() {
	return (
		<>
			<LoggedInTemplate title="Início / Listar ordens de serviço">
				<section className="sectionConteudoCriar">
					<div>
						<PageTitle>Nova Ordem de serviço</PageTitle>
					</div>
					<div>
						<NovaOrdemForm />
					</div>
				</section>
			</LoggedInTemplate>
		</>
	);
}
