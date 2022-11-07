import styled from "styled-components";

export const CRUDIconDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 59px;
	height: 45px;
	background: #d9d9d9;
	border-radius: 10px;

	font-family: "Font Awesome 5 Free";
	font-style: normal;
	font-weight: 900;
	font-size: 24px;
	line-height: 28px;

	margin: 15px;

	cursor: pointer;

	&.eye {
		margin-right: 6px;
	}
`;

export const CRUDDivAux = styled.div`
	display: flex;
	margin: 0 6px;
`;
