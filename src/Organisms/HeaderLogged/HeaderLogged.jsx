import React from "react";
import LogoTitle from "../../Atoms/logoTitle";
import LogoImageCar from "../../Molecules/Logoimagecar/LogoImageCar";
import LogoText from "../../Molecules/LogoText";
import "./style.css";

export default function HeaderLogged(props) {
	const { title } = props || {};
	return (
		<>
			<div className="logoDiv">
				<LogoText />
				<LogoImageCar />
			</div>
			<div className="headerTitleDiv">
				<LogoTitle id="headerTitle">{title}</LogoTitle>
			</div>
		</>
	);
}
