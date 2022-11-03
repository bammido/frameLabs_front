import React from "react";
import "./style.css";

export default function HomeCard(props) {
	const { descricao, qtd } = props || {};
	return (
		<div className="card">
			<div className="descricao">{descricao}</div>
			<div className="qtd">{qtd}</div>
		</div>
	);
}
