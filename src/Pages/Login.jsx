import React from "react";
import LoginForm from "../Organisms/LoginForm/LoginForm";
import BackgroundGradiente from "../Atoms/backgroundGradiente";
import Logo from "../Organisms/Logo/Logo";

export default function Login() {
	return (
		<BackgroundGradiente>
			<Logo />
			<LoginForm />
		</BackgroundGradiente>
	);
}
