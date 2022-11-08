import React, { createContext, useState } from "react";

export const ComboBoxContext = createContext();

export function ComboBoxContextProvider(props) {
	const { children } = props || {};
	const [showWindow, setShowWindow] = useState("");

	function handleShowWindow(window) {
		setShowWindow(window);
	}

	const states = { showWindow };
	const methods = { handleShowWindow };
	return (
		<ComboBoxContext.Provider value={{ states, methods }}>
			{children}
		</ComboBoxContext.Provider>
	);
}
