import React from "react";
import ComboBoxInfosMainDiv from "./ComboBoxInfosStyle";
import "./style.css";
import ComboBoxInfosFooter from "./ComboBoxInfosFooter";

export default function ComboBoxInfos(props) {
	const { children } = props || {};
	return (
		<ComboBoxInfosMainDiv>
			<div className="comboBoxChildren">{children}</div>
			<div className="comboBoxCRUDDiv">
				<ComboBoxInfosFooter />
			</div>
		</ComboBoxInfosMainDiv>
	);
}
