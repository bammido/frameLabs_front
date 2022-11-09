import React from "react";
import PageTitle from "../../Atoms/PageTitle";
import NovoServicoForm from "../../Organisms/NovaOrdemForm/NovaOrdemForm";
import LoggedInTemplate from "../../Templates/LoggedIn/LoggedIn";
import "./style.css";

export default function CriarNovoServico() {
	return (
		<>
			<LoggedInTemplate title="Início / Serviços">
				<section className="sectionConteudoCriar">
					<div>
						<PageTitle>Novo Serviço</PageTitle>
					</div>
					<div>
						<NovoServicoForm />
					</div>
				</section>
			</LoggedInTemplate>
		</>
	);
}
