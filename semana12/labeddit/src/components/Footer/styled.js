import styled from "styled-components";
import { PrimaryColor, SecondaryColor, SecondaryColorMedium } from "../../constants/colors";

export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    background-color: ${SecondaryColor};
    color: ${PrimaryColor};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
`
export const LabEdditButton = styled.button`
    grid-column: 1/2;
    grid-row: 1/2;
    background-color: ${SecondaryColor};
    color: ${PrimaryColor};
    border: none;
    border-radius: 5px;
    font-size: 0.7em;
    padding: 0.1em 0.5em;
    margin: 0.2em;
    justify-self: left;
    :hover{
        background-color: ${SecondaryColorMedium};
        cursor: pointer; 
    }
`
export const PrivacyPolicyButton = styled.button`
    grid-column: 2/3;
    grid-row: 1/2;
    background-color: ${SecondaryColor};
    color: ${PrimaryColor};
    border: none;
    border-radius: 5px;
    font-size: 0.7em;
    padding: 0.1em 0.5em;
    margin: 0.2em;
    justify-self: right;
    :hover{
        background-color: ${SecondaryColorMedium};
        cursor: pointer; 
    }
`
