import styled from "styled-components";
import { PrimaryColor, SecondaryColor, PrimaryColorMedium } from "../../constants/colors";

export const HeaderContainer = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    background-color: ${PrimaryColor};
    color: ${SecondaryColor};
    padding-left: 2vw;
    padding-right: 2vw;
`
export const HeaderButtons = styled.button`
    background-color: ${PrimaryColor};
    color: ${SecondaryColor};
    border: none;
    border-radius: 5px;
    font-size: 1.5em;
    padding: 0.1em 0.5em;
    margin: 0.2em;
    :hover{
        background-color: ${PrimaryColorMedium};
        cursor: pointer; 
    }
    
`