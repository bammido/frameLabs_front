import styled from "styled-components";
import Input from "../../../Atoms/input";

export const CloseWindowDiv = styled.div`
	display: flex;
	justify-content: end;
	width: 100%;
	margin: 9px 14px;
`;

export const CloseWindowEllipse = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 57px;
	height: 52px;

	font-style: normal;
	font-weight: 900;
	font-size: 24px;
	line-height: 28px;

	color: #ff9e00;

	background: #5a189a;
	border-radius: 50%;
	margin-right: 30px;

	cursor: pointer;
`;

export const Label = styled.label`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 28px;

	margin: 8px 0;

	color: #ffffff;
`;

export const InputDiv = styled.div`
	width: 273px;
	display: flex;
	flex-direction: column;
	margin: 7px 20px;

	& > input {
		width: 271px;
		height: 52px;
	}

	& > input:disabled {
		cursor: not-allowed;
	}
`;

export const Centralizer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const InputViewServiceOrder = styled(Input)`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 28px;

	color: #000000;
`;

export const InfosSpanDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: 265px;
	height: 28px;
	margin: 8px 0;
`;

export const InfosSpan = styled.span`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 28px;

	color: #ffffff;
`;

export const Button = styled.button`
	width: 128px;
	height: 44px;

	border: 1px solid #000000;
	border-radius: 13px;

	background: ${(props) => (props.salvar ? "#05FF00" : "#FF0000")};

	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 29px;

	color: #ffffff;

	margin-right: ${(props) => (!props.salvar ? "5px" : "0")};
	margin-top: 21px;

	border: 1px solid #000000;

	cursor: pointer;
`;
