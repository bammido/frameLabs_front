import React from "react";

export default function FontAwesomeIcon(props) {
	const { iconClass } = props || {};
	return (
		<>
			<i className={iconClass}></i>
		</>
	);
}
