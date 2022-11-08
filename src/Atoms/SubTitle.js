import MainTitle from "./mainTitle";
import styled from "styled-components";

const SubTitle = styled(MainTitle)`
	font-family: "Fira Sans";
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 29px;

	color: ${(props) => (props.selected ? "#fff" : "#929292")};
`;

export default SubTitle;
