import styled, { css } from "styled-components";
import Input from "../input";
// import Button from "../button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
registerLocale("ptBR", ptBR);
setDefaultLocale("ptBR");

const Conteudo = styled.div`

    /* align-items: center; */
    text-align: center;
    justify-content: center;

`;

const WrapLastThreeFields = styled.div`
      
    @media (min-width: 1217px) {
    display:flex;
    justify-content: center;
    gap: 40px;
    }
`;

const WrapDateServices = styled.div`

    @media (min-width: 1217px){
        display: flex;
        align-items: start;
        flex-direction: column;
    }
`;

const InputTexto = styled(Input)`
    width: 264px;
    height: 51px;
    
    @media (min-width: 1217px) {
        width: 1116px;
        background-color:  #e8ddf0;
    }
    :hover{
        border-color: #FF6D00;
    }
    :focus{
    border-color: blue;
    }
    
`;

const Select = styled.select`
	background: #ffffff;
	border: 1px solid #9d4edd;
	border-radius: 19px;
	padding: 5px 25px;
	color: #000000;
	font-family: "Roboto";
	font-weight: 400;
    margin: 12px 0px 12px 0;
    width: 264px;
    height: 50px;

    @media (min-width: 1217px) {
        width: 302px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 12px;
        background-color:  #e8ddf0;
        :hover{
        border-color: #FF6D00;
        }
    }
    
`;

const Observacoes = styled(Input)`

    height: 108px;
    width: 264px;
    margin-bottom: 21px;

    @media (min-width: 1217px) {
        width: 765px;
        height: 132px;
        display: flex;
        flex-direction: row;
        background-color:  #e8ddf0;

        :hover{
        border-color: #FF6D00;
        }
    }
    
`;

const Data = styled(DatePicker)`

background: #ffffff;
	border: 1px solid #9d4edd;
	border-radius: 19px;
	padding: 5px 25px;
	color: #000000;
	font-family: "Roboto";
	font-weight: 400;
    margin: 12px 0px 12px 0;
    width: 210px;
    height: 43px;

    @media (min-width: 1217px) {
        width: 252px;
        display: flex;
        flex-direction: column;
        background-color:  #e8ddf0;

        :hover{
            cursor: context-menu;
        }
        :hover{
        border-color: #FF6D00;
    }
    }

`;

const WrapButton = styled.div`

    align-items: center;
	display: flex;
	text-align: center;
	width: 100%;
	justify-content: center;

    @media (min-width: 1217px) {
        align-items: center;
	    display: flex;
	    width: 100%;
	    justify-content: end;
        margin-right: 500px;
    }
    
`;

const BotoesCTA = styled.button`
    display: flex;
    flex-direction: column;
	border: 1px solid #9d4edd;
    background-color: #05FF00;
    border-radius:13px;
    color: #ffffff;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-family: 'Fira Sans', sans-serif;
    font-size: 24px;
    font-weight: bold;
    width: 128px;
    height: 44px;
    align-items: center;
    padding-top: 8px;
    margin-left: 10px;
    @media (min-width: 1217px) {
        margin-right: 20.2rem;
        width: 190px;
        height: 84.36px;
        font-size: 24px;
        font-weight: bold;
        justify-content: center;
    }
    

    ${props => props.cancelar && css`
    
        background-color: #FF0000;
        color: #ffffff;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
        margin-left: 0;

        @media (min-width: 1217px) {
            margin-right: 0;
        }
    `}
`;

export {Conteudo,WrapLastThreeFields, WrapDateServices, Select, InputTexto, Observacoes, WrapButton ,BotoesCTA, Data};