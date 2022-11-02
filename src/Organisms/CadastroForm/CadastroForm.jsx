import React from "react";
import Button from "../../Atoms/button";
import Input from "../../Atoms/input";
import MainTitle from "../../Atoms/mainTitle";
import "./style.css";

export default function CadastroForm() {
	return (
		<>
			<form className="formDiv">
				<MainTitle className="cadastro">Cadastro</MainTitle>
				<Input placeholder="nome" className="nome" />
				<Input placeholder="email" className="email" />
				<Input placeholder="senha" className="senha" />
				<Button>Cadastrar</Button>
			</form>
		</>
	);
}
