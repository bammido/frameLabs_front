import React from "react";
import FontAwesomeIcon from "../../Atoms/FontAwesomeIcon";
import { CRUDIconDiv } from "./style";
import "./style.css";

export default function comboBoxInfosIconFooter(props) {
	const { iconClass, CRUDDivClass, onClick } = props || {};
	return (
		<CRUDIconDiv className={CRUDDivClass} onClick={onClick}>
			<FontAwesomeIcon iconClass={iconClass} />
		</CRUDIconDiv>
	);
}
