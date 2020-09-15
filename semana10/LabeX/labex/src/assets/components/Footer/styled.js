import React from "react";
import styled from "styled-components";
import { darkGrayLabenu, paleTealLabenu } from "../../constants/colors";

export const FooterDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 10px;
    background-color: ${darkGrayLabenu};
    padding: 1vh 1vw;
    color: ${paleTealLabenu};
    font-size: 0.65em;
`

export const Labex = styled.span`
    grid-column: 1/2;
`

export const PrivacyPolicy = styled.span`
    grid-column: 3/4;
`

export const Social = styled.span`
    grid-column: 2/3;

`

export const IconsFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

`

export const Image = styled.img`
    height: 20px;

`

