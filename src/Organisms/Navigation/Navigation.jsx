import React from "react";
import FontAwesomeIcon from "../../Atoms/FontAwesomeIcon";
import "./style.css";

export default function Navigation() {
	return (
		<>
			<div className="navDiv">
				<div className="iconDiv">
					<FontAwesomeIcon iconClass="fa-solid fa-list" />
				</div>
				<div className="iconDiv">
					<FontAwesomeIcon iconClass="fa-solid fa-home" />
				</div>
				<div className="iconDiv">
					<FontAwesomeIcon iconClass="fa-solid fa-wrench" />
				</div>
				<div className="iconDiv">
					<FontAwesomeIcon iconClass="fa-solid fa-right-from-bracket" />
				</div>
			</div>
		</>
	);
}
