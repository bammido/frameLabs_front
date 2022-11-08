import React from "react";
import AbsoluteWindow from "../../../Atoms/AbsoluteWindow/AbsoluteWindow";
import FontAwesomeIcon from "../../../Atoms/FontAwesomeIcon";
import {
	Centralizer,
	CloseWindowDiv,
	CloseWindowEllipse,
	InputDiv,
	InputViewServiceOrder,
	Label,
} from "../windows/style";
import { ConfirmRemoveButton, ConfirmRemoveDiv } from "./style";

export default function RemoveService(props) {
	const values = {
		nomeCompleto: "fulano de tal",
	};
	const { nome } = values || {};
	const { closeWindow, edit } = props || {};

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
					<InputViewServiceOrder value={nome} disabled />
				</InputDiv>
			</Centralizer>

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
