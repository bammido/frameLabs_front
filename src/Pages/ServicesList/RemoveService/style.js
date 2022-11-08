import styled from "styled-components";
import { Button, InputDiv } from "../windows/style";

export const ConfirmRemoveDiv = styled(InputDiv)`
	flex-direction: column;
	align-items: center;
	margin-top: 29px;

	&:nth-child(1) {
		margin-bottom: 25px;
	}
`;

export const ConfirmRemoveButton = styled(Button)`
	background: ${(props) => (props.cancelar ? "#B9B9B9" : "#FF0000")};
	color: ${(props) => (props.cancelar ? "#5A189A;" : "#FFF")};
`;
