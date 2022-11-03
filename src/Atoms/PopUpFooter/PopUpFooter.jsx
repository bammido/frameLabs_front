import React from "react";
import "./PopUp";
import PopUp from "./PopUp";
import "./style.css";

export default function PopUpFooter(props) {
	const { children } = props || {};
	return (
		<>
			<div className="popUpDiv">
				<PopUp>{children}</PopUp>
			</div>
		</>
	);
}
