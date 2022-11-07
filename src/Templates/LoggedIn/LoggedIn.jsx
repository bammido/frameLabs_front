import React from "react";
import HeaderLogged from "../../Organisms/HeaderLogged/HeaderLogged";
import Navigation from "../../Organisms/Navigation/Navigation";
import "./style.css";

export default function LoggedInTemplate(props) {
	const { children, title } = props || {};
	return (
		<>
			<div className="mainDiv">
				<div className="headerBody">
					<HeaderLogged title={title} />
					<div className="templateContentDiv">{children}</div>
				</div>
				<Navigation />
			</div>
		</>
	);
}
