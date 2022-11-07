import React from "react";
import { Background, Modal } from "./style";

export default function AbsoluteWindow(props) {
	const { children, modalClass } = props || {};

	return (
		<Background>
			<Modal className={modalClass}>{children}</Modal>
		</Background>
	);
}
