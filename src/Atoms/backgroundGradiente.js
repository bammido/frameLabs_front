import styled from "styled-components";

const BackgroundGradiente = styled.div`
	min-width: 100vw;
	width: 100%;
	min-height: 100vh;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(36, 0, 70, 0.63) 100%),
		linear-gradient(
			180deg,
			rgba(255, 122, 0, 0.2) 0%,
			rgba(255, 121, 0, 0.2) 18.23%,
			rgba(255, 133, 0, 0.2) 32.51%,
			rgba(255, 136, 0, 0.2) 43.79%,
			rgba(255, 145, 0, 0.2) 59.41%,
			rgba(183, 89, 23, 0.2) 77.6%,
			rgba(36, 0, 70, 0.2) 100%
		);
`;

export default BackgroundGradiente;
