import React from "react";
import AbsoluteWindow from "../../../../Atoms/AbsoluteWindow/AbsoluteWindow";
import FontAwesomeIcon from "../../../../Atoms/FontAwesomeIcon";
import {
	CloseWindowDiv,
	CloseWindowEllipse,
	InputDiv,
	InputViewServiceOrder,
	Label,
} from "../style";
import { ConfirmRemoveButton, ConfirmRemoveDiv } from "./style";

export default function RemoveServiceOrder(props) {
	const { closeWindow, values } = props || {};

	const { nomeCompleto, tipo } = values || {};
	return (
		<AbsoluteWindow>
			<CloseWindowDiv>
				<CloseWindowEllipse onClick={closeWindow}>
					<FontAwesomeIcon iconClass="fa-solid fa-square-xmark" />
				</CloseWindowEllipse>
			</CloseWindowDiv>
			<InputDiv>
				<Label>Nome Completo</Label>
				<InputViewServiceOrder value={nomeCompleto} disabled />
			</InputDiv>
			<InputDiv>
				<Label>Tipo de Ordem</Label>
				<InputViewServiceOrder value={tipo} disabled />
			</InputDiv>
			<ConfirmRemoveDiv>
				<Label>Tem Certeza?</Label>
				<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
					<ConfirmRemoveButton>Remover</ConfirmRemoveButton>
					<ConfirmRemoveButton cancelar onClick={closeWindow}>
						Cancelar
					</ConfirmRemoveButton>
				</div>
			</ConfirmRemoveDiv>
		</AbsoluteWindow>
	);
}
