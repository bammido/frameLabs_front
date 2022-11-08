import React, { useState } from "react";
import ComboBox from "../../Organisms/ComboBox/ComboBox";
import LoggedInTemplate from "../../Templates/LoggedIn/LoggedIn";
import RemoveService from "./RemoveService/RemoveService";
import { ComboBoxDiv, ServiceLisrMainDiv } from "./style";
import ViewService from "./windows/ViewService/ViewService";

export default function ServicesList() {
	const [showWindow, setShowWindow] = useState("");

	function handleShowWindow(windowName) {
		setShowWindow(windowName);
	}
	return (
		<LoggedInTemplate title="Serviços">
			<ServiceLisrMainDiv>
				<ComboBoxDiv>
					<ComboBox onClick={handleShowWindow} title="Limpeza">
						<div>status</div>
						<div>data</div>
						<div>Nome Do Funcionario</div>
					</ComboBox>
				</ComboBoxDiv>
				<ComboBoxDiv>
					<ComboBox onClick={handleShowWindow} title="Limpeza">
						<div>status</div>
						<div>data</div>
						<div>Nome Do Funcionario</div>
					</ComboBox>
				</ComboBoxDiv>
				<ComboBoxDiv>
					<ComboBox onClick={handleShowWindow} title="Limpeza">
						<div>status</div>
						<div>data</div>
						<div>Nome Do Funcionario</div>
					</ComboBox>
				</ComboBoxDiv>
			</ServiceLisrMainDiv>
			{showWindow && showWindow === "view" && (
				<ViewService closeWindow={() => handleShowWindow("")} edit={false} />
			)}
			{showWindow && showWindow === "edit" && (
				<ViewService closeWindow={() => handleShowWindow("")} edit={true} />
			)}
			{showWindow && showWindow === "remove" && (
				<RemoveService closeWindow={() => handleShowWindow("")} />
			)}
		</LoggedInTemplate>
	);
}
