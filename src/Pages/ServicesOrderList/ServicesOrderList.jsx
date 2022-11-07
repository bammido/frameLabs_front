import React from "react";
import ComboBox from "../../Organisms/ComboBox/ComboBox";
import LoggedInTemplate from "../../Templates/LoggedIn/LoggedIn";
import "./style.css";

export default function ServicesOrderList() {
	return (
		<LoggedInTemplate title="Início / listar ordens de serviços">
			<div className="background">
				<div className="comboBox">
					<ComboBox title="Limpeza Jorge">
						<div>status</div>
						<div>data</div>
						<div>Nome Do Funcionario</div>
					</ComboBox>
				</div>
				<div className="comboBox">
					<ComboBox title="Limpeza Jorge"></ComboBox>
				</div>
			</div>
		</LoggedInTemplate>
	);
}
