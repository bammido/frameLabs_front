
import styled from "styled-components";
import Input from "../input";

let PriceField = styled(Input)`

width: 265px;
height: 51px;

@media (min-width: 1217px) {
    width: 158px;
    height: 81px;;
    background-color:  #e8ddf0;
}
:hover{
    border-color: #FF6D00;
}
`;

export default PriceField;