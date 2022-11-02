import React from "react";
import LoginForm from "../Organisms/LoginForm/LoginForm";
import BackgroundGradiente from "../Atoms/backgroundGradiente";
import Header from "../Organisms/Logo/Header";

export default function Login() {
	return (
		<BackgroundGradiente>
			<Header />
			<LoginForm />
		</BackgroundGradiente>
	);
}
