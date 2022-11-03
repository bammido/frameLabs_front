import React from "react";
import BackgroundGradiente from "../../Atoms/backgroundGradiente";
import Button from "../../Atoms/button";
import CadastroForm from "../../Organisms/CadastroForm/CadastroForm";
import Header from "../../Organisms/Logo/Header";
import "./style.css";

export default function Cadastro() {
	return (
		<BackgroundGradiente>
			<Header />
			<div className="cadastroDiv">
				<CadastroForm />
				<Button className="voltar">voltar</Button>
			</div>
		</BackgroundGradiente>
	);
}
