import React from "react";
import { useState } from "react";

import {
	InputTexto,
	Select,
	Observacoes,
	BotoesCTA,
	Data,
	Conteudo,
	WrapButton,
	WrapLastThreeFields,
	WrapDateServices,
} from "./style.js";

export default function FormularioOrdemDeServico() {
	const [data, setData] = useState();

	return (
		<>
			<Conteudo>
				<InputTexto placeholder="Nome" />
				<InputTexto placeholder="CPF" />
				<InputTexto placeholder="E-mail" />
				<WrapLastThreeFields>
					<WrapDateServices>
						<Select name="Servicos">
							<option value="" disabled selected hidden>
								Tipo da ordem
							</option>
							<option value="Limpeza">Limpeza</option>
							<option value="Manutenção">Manutenção</option>
							<option value="Revisão">Revisão</option>
							<option value="Serviços gerais">Serviços gerais</option>
						</Select>
						<Data
							placeholderText="Data"
							onChange={(e) => setData(e)}
							selected={data}
							dateFormat="dd/MM/yyyy"
						/>
					</WrapDateServices>
					<Observacoes placeholder="Observações" />
				</WrapLastThreeFields>
				<WrapButton>
					<BotoesCTA cancelar>Cancelar</BotoesCTA>
					<BotoesCTA>Salvar</BotoesCTA>
				</WrapButton>
			</Conteudo>
		</>
	);
}
