import styled from "styled-components";

const Button = styled.button`
	box-sizing: border-box;

	width: 200px;
	height: 43px;
	/* left: 95px;
	top: 543px; */

	background: #9d4edd;
	border: 1px solid #9d4edd;
	border-radius: 19px;
	padding: 5px 25px;
	color: #fafafa;
	font-weight: 400;
	font-family: "Roboto";
	/* font-size: 20px;
	line-height: 23px; */

	&:hover {
		cursor: pointer;
	}
`;

export default Button;
