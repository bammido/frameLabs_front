import React from "react";
import LogoImageCar from "../../Molecules/Logoimagecar/LogoImageCar";
import LogoText from "../../Molecules/LogoText";
import "./style.css";

export default function Logo() {
	return (
		<>
			<div className="logoDiv">
				<LogoText />
				<LogoImageCar />
			</div>
		</>
	);
}
