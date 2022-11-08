import React from "react";
import AbsoluteWindow from "../../../../Atoms/AbsoluteWindow/AbsoluteWindow";
import FontAwesomeIcon from "../../../../Atoms/FontAwesomeIcon";
import {
	Button,
	Centralizer,
	CloseWindowDiv,
	CloseWindowEllipse,
	InputDiv,
	InputViewServiceOrder,
	Label,
} from "../style";
import { InputViewServiceDescricao } from "./style";

export default function ViewService(props) {
	const { closeWindow, edit } = props || {};
	const values = {
		nomeCompleto: "fulano de tal",
		descricao:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		valor: "R$40,00",
	};
	const { nome, valor, descricao } = values || {};
	return (
		<AbsoluteWindow>
			<CloseWindowDiv>
				<CloseWindowEllipse onClick={closeWindow}>
					<FontAwesomeIcon iconClass="fa-solid fa-square-xmark" />
				</CloseWindowEllipse>
			</CloseWindowDiv>
			<Centralizer>
				<InputDiv>
					<Label>Nome Completo</Label>
					<InputViewServiceOrder value={nome} disabled={!edit} />
				</InputDiv>
				<InputDiv>
					<Label>Valor</Label>
					<InputViewServiceOrder value={valor} disabled={!edit} />
				</InputDiv>
				<InputDiv>
					<Label>Descrição</Label>
					<InputViewServiceDescricao value={descricao} disabled={!edit} />
				</InputDiv>
			</Centralizer>

			{edit && (
				<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
					<Button onClick={closeWindow}>Cancelar</Button>
					<Button salvar>Salvar</Button>
				</div>
			)}
		</AbsoluteWindow>
	);
}
