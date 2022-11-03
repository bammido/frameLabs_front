import React from "react";
import LoginForm from "../../Organisms/LoginForm/LoginForm";
import BackgroundGradiente from "../../Atoms/backgroundGradiente";
import Header from "../../Organisms/Logo/Header";
import "./style.css";

export default function Login() {
	return (
		<BackgroundGradiente>
			<Header />
			<div className="loginDiv">
				<LoginForm />
			</div>
		</BackgroundGradiente>
	);
}
