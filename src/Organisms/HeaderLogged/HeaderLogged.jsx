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
				<nav className="menu">
					<ul className="List">
						<li className="listItem">Início</li>
						<li className="listItem">Ordens de serviço</li>
						<li className="listItem">Serviços</li>
						<li className="listItem">Sair</li>
					</ul>
				</nav>
			</div>
			<div className="headerTitleDiv">
				<LogoTitle id="headerTitle">{title}</LogoTitle>
			</div>
		</>
	);
}
