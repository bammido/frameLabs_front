import styled from "styled-components";

export const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;

	height: 100vh;
	max-height: 100vh;
	width: 100vw;

	display: flex;
	justify-content: center;
	align-items: center;

	background: rgb(0, 0, 0, 0.6);
`;

export const Modal = styled.div`
	width: 323px;
	height: 638px;

	background: #7b2cbf;
	border-radius: 10px;

	@media screen and (min-width: 450px) {
		transform: scale(0.8);
	}
`;
