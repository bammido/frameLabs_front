import React from "react";
import ComboBoxInfosIconFooter from "./comboBoxInfosIconFooter";
import { CRUDDivAux } from "./style";
import ViewServiceOrder from "./windows/ViewServiceOrder/ViewServiceOrder";
import { useState } from "react";
import RemoveServiceOrder from "./windows/RemoveServiceOrder/RemoveServiceOrder";

export default function ComboBoxInfosFooter() {
	const [showWindow, setShowWindow] = useState("");

	function handleShowWindow(window) {
		setShowWindow(window);
	}

	return (
		<>
			{showWindow && showWindow === "view" && (
				<ViewServiceOrder closeWindow={() => handleShowWindow("")} edit={false} />
			)}
			{showWindow && showWindow === "edit" && (
				<ViewServiceOrder closeWindow={() => handleShowWindow("")} edit={true} />
			)}
			{showWindow && showWindow === "remove" && (
				<RemoveServiceOrder closeWindow={() => handleShowWindow("")} edit={true} />
			)}
			<CRUDDivAux>
				<ComboBoxInfosIconFooter
					iconClass="fa-solid fa-eye"
					CRUDDivClass="eye"
					onClick={() => handleShowWindow("view")}
				/>
				<ComboBoxInfosIconFooter
					iconClass="fa-solid fa-pencil"
					onClick={() => handleShowWindow("edit")}
				/>
			</CRUDDivAux>
			<CRUDDivAux>
				<ComboBoxInfosIconFooter
					iconClass="fa-solid fa-trash trash"
					onClick={() => handleShowWindow("remove")}
				/>
			</CRUDDivAux>
		</>
	);
}
