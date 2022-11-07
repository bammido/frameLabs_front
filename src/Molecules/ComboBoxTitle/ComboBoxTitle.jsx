import React from "react";
import ComboBoxTitleMainDiv from "./ComboBoxTitleStyle";
import "./style.css";

export default function ComboBoxTitle(props) {
	const { title } = props || {};
	return (
		<>
			<ComboBoxTitleMainDiv>
				<div className="comboBoxTitleText">{title}</div>
			</ComboBoxTitleMainDiv>
		</>
	);
}
