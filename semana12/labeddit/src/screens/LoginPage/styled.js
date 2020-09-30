import React from "react";
import styled from "styled-components";
import { PrimaryColor, SecondaryColor, PrimaryColorMedium } from "../../constants/colors";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
`

export const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 400px;
    gap: 1vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
`
export const LogoLogin = styled.img`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 60vw;
    max-width: 300px;
`
export const LoginButton = styled.button`
    background-color: ${PrimaryColor};
    color: ${SecondaryColor};
    border: none;
    border-radius: 5px;
    font-size: 1.3em;
    font-weight: bold;
    font-variant-caps: all-small-caps;
    :hover{
        background-color: ${PrimaryColorMedium};
        cursor: pointer; 
    }
`