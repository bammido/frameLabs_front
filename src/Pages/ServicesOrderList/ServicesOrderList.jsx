import React from "react";
import ComboBox from "../../Organisms/ComboBox/ComboBox";
import LoggedInTemplate from "../../Templates/LoggedIn/LoggedIn";

import RemoveServiceOrder from "../../Molecules/ComboBoxInfos/windows/RemoveServiceOrder/RemoveServiceOrder";
import ViewServiceOrder from "../../Molecules/ComboBoxInfos/windows/ViewServiceOrder/ViewServiceOrder";
import "./style.css";
import { useState } from "react";

export default function ServicesOrderList() {
	const [showWindow, setShowWindow] = useState("");

	function handleShowWindow(windowName) {
		setShowWindow(windowName);
	}

	return (
		<LoggedInTemplate title="Início / listar ordens de serviços">
			<div className="background">
				<div className="comboBox">
					<ComboBox onClick={handleShowWindow} title="Limpeza Jorge">
						<div>status</div>
						<div>data</div>
						<div>Nome Do Funcionario</div>
					</ComboBox>
				</div>
				<div className="comboBox">
					<ComboBox onClick={handleShowWindow} title="Limpeza Jorge"></ComboBox>
				</div>
			</div>
			{showWindow && showWindow === "view" && (
				<ViewServiceOrder closeWindow={() => handleShowWindow("")} edit={false} />
			)}
			{showWindow && showWindow === "edit" && (
				<ViewServiceOrder closeWindow={() => handleShowWindow("")} edit={true} />
			)}
			{showWindow && showWindow === "remove" && (
				<RemoveServiceOrder closeWindow={() => handleShowWindow("")} />
			)}
		</LoggedInTemplate>
	);
}
