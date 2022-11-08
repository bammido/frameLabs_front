import React from "react";
import AbsoluteWindow from "../../../../Atoms/AbsoluteWindow/AbsoluteWindow";
import FontAwesomeIcon from "../../../../Atoms/FontAwesomeIcon";
import {
	Button,
	Centralizer,
	CloseWindowDiv,
	CloseWindowEllipse,
	InfosSpan,
	InfosSpanDiv,
	InputDiv,
	InputViewServiceOrder,
	Label,
} from "../style";

export default function ViewServiceOrder(props) {
	const { closeWindow, edit } = props || {};
	const values = {
		cpf: "999999",
		nomeCompleto: "fulano de tal",
		email: "fulano@email.com",
		colaborador: "ciclano",
		status: "em andamento",
		data: "23/12/1999",
	};
	const { nomeCompleto, cpf, email, colaborador, data, status } = values || {};
	return (
		<>
			<AbsoluteWindow>
				<CloseWindowDiv>
					<CloseWindowEllipse onClick={closeWindow}>
						<FontAwesomeIcon iconClass="fa-solid fa-square-xmark" />
					</CloseWindowEllipse>
				</CloseWindowDiv>
				<Centralizer>
					<InputDiv>
						<Label>Nome Completo</Label>
						<InputViewServiceOrder value={nomeCompleto} disabled={!edit} />
					</InputDiv>
					<InputDiv>
						<Label>CPF</Label>
						<InputViewServiceOrder value={cpf} disabled={!edit} />
					</InputDiv>
					<InputDiv>
						<Label>E-mail</Label>
						<InputViewServiceOrder type="email" value={email} disabled={!edit} />
					</InputDiv>
					<InfosSpanDiv>
						<InfosSpan>Status</InfosSpan>
						<InfosSpan>{status}</InfosSpan>
					</InfosSpanDiv>
					<InfosSpanDiv>
						<InfosSpan>Data</InfosSpan>
						<InfosSpan>{data}</InfosSpan>
					</InfosSpanDiv>
					<InputDiv>
						<Label>Colaborador responsável</Label>
						<InputViewServiceOrder value={colaborador} disabled={!edit} />
					</InputDiv>
				</Centralizer>

				{edit && (
					<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
						<Button onClick={closeWindow}>Cancelar</Button>
						<Button salvar>Salvar</Button>
					</div>
				)}
			</AbsoluteWindow>
		</>
	);
}
