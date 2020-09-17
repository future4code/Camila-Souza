import React from "react";
import styled from "styled-components";
import { darkGrayLabenu, paleTealLabenu, orangeLabenu } from "../../constants/colors";

export const HeaderDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: ${orangeLabenu};
    padding: 1vh 1vw;
    color: ${paleTealLabenu};
`
export const Labex = styled.span`
    align-self: center;
    font-weight: bold;
    font-size: 1.5em;
    :hover {
        color: ${darkGrayLabenu};
        cursor: pointer;
    }
`
export const Login = styled.span`
    font-size: 1em;
    align-self: center;
    :hover {
        color: ${darkGrayLabenu};
        cursor: pointer;
    }    
`