import React from "react";
import HomeSectionConteudo from "../../Organisms/HomeSectionConteudo/HomeSectionConteudo";
import LoggedInTemplate from "../../Templates/LoggedIn/LoggedIn";
import "./style.css";

export default function Home() {
	return (
		<>
			<LoggedInTemplate title="Início">
				<section className="sectionConteudo">
					<HomeSectionConteudo />
				</section>
			</LoggedInTemplate>
		</>
	);
}
