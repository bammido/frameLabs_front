import React from "react";
import Input from "../Atoms/input";
import MainTitle from "../Atoms/mainTitle";
import Button from "../Atoms/button";
import SignUp from "../Atoms/signUp";
import CentralizerDiv from "../Atoms/centralizerDiv";
import "./style.css";

export default function LoginForm() {
	return (
		<>
			<CentralizerDiv className="mainDiv">
				<MainTitle className="login">Login</MainTitle>
				<Input className="email" placeholder="email" />
				<Input className="senha" placeholder="senha" />
				<Button className="acessar-sistema">Acessar Sistema</Button>
				<SignUp className="signUp">Cadastre-se</SignUp>
			</CentralizerDiv>
		</>
	);
}
