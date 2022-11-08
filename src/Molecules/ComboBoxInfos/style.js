import styled from "styled-components";

export const ComboBoxInfosMainDiv = styled.div`
	max-width: 327px;
	max-height: 182px;
	margin-left: 13px;
	background: #f1f1f1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;


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
