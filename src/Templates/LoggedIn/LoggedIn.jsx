import React from "react";
import HeaderLogged from "../../Organisms/HeaderLogged/HeaderLogged";
import Navigation from "../../Organisms/Navigation/Navigation";
import "./style.css";

export default function LoggedInTemplate(props) {
	const { children, title } = props || {};
	return (
		<>
			<div className="mainDiv">
				<HeaderLogged title={title} />
				{children}
				<Navigation />
			</div>
		</>
	);
}
