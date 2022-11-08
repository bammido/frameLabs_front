import React from "react";
import "./style.css";
import { CRUDDivAux, CRUDIconDiv, ComboBoxInfosMainDiv } from "./style";
import FontAwesomeIcon from "../../Atoms/FontAwesomeIcon";

export default function ComboBoxInfos(props) {
	const { children, onClick } = props || {};

	return (
		<ComboBoxInfosMainDiv>
			<div className="comboBoxChildren">{children}</div>
			<div className="comboBoxCRUDDiv">
				<CRUDDivAux>
					<CRUDIconDiv className="eye" onClick={() => onClick("view")}>
						<FontAwesomeIcon iconClass="fa-solid fa-eye" />
					</CRUDIconDiv>
					<CRUDIconDiv onClick={() => onClick("edit")}>
						<FontAwesomeIcon iconClass="fa-solid fa-pencil" />
					</CRUDIconDiv>
				</CRUDDivAux>
				<CRUDDivAux>
					<CRUDIconDiv onClick={() => onClick("remove")}>
						<FontAwesomeIcon iconClass="fa-solid fa-trash trash" />
					</CRUDIconDiv>
				</CRUDDivAux>
			</div>
		</ComboBoxInfosMainDiv>
	);
}
