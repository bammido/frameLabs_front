import styled from "styled-components";

const PopUp = styled.div`
	/* margin: 0 auto; */
	/* background: #7e57c2; */

	position: relative;
	background: #000000;
	border-radius: 15px;
	width: 105px;
	height: 40px;

	font-family: "Roboto";
	font-style: normal;
	font-weight: 900;
	font-size: 20px;
	line-height: 23px;
	color: #fff;
	padding: 10px;
	/* margin-top: 30px; */

	&:after {
		/*Triangulo*/
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		border-left: 20px solid transparent;
		border-right: 20px solid transparent;
		/*Faz seta "apontar para baixo. Definir o valor como 'top' fará ela "apontar para cima" */
		/*Aqui entra a cor da "aba" do balão */
		/* border-bottom: 20px solid #7e57c2; */
		border-bottom: 20px solid #000000;
		bottom: -18px; /*localização. Experimente alterar para 'bottom'*/
		left: 40%;
		transform: rotate(180deg);
	}
`;

export default PopUp;
