import React from "react";

import {
	InputTexto,
	Observacoes,
	BotoesCTA,
	Conteudo,
	WrapButton,
	WrapObserv,
	InputValor,
} from "./style.js";

export default function FormularioServico() {
	return (
		<>
			<Conteudo>
				<InputTexto placeholder="Nome do serviço" />
				<InputValor type={"number"} placeholder="Valor" min="0.01" step="0.01" />
				<WrapObserv>
					<Observacoes placeholder="Descrição" />
				</WrapObserv>
				<WrapButton>
					<BotoesCTA cancelar>Cancelar</BotoesCTA>
					<BotoesCTA>Salvar</BotoesCTA>
				</WrapButton>
			</Conteudo>
		</>
	);
}
