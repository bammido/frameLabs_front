import React from "react";
import { useState } from "react";
import ComboBoxInfos from "../../Molecules/ComboBoxInfos/ComboBoxInfos";
import ComboBoxTitle from "../../Molecules/ComboBoxTitle/ComboBoxTitle";

export default function ComboBox(props) {
	const { children, title, onClick } = props || {};

	const [showInfos, setShowInfos] = useState(false);

	function handleShowInfos() {
		setShowInfos(!showInfos);
	}

	return (
		<>
			<div>
				<div className="teste" onClick={handleShowInfos}>
					<ComboBoxTitle title={title} />
				</div>
				{showInfos && <ComboBoxInfos onClick={onClick}>{children}</ComboBoxInfos>}
			</div>
		</>
	);
}
