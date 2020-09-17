import React from "react";
import styled from "styled-components";
import { darkGrayLabenu, paleTealLabenu, orangeLabenu } from "../../constants/colors";

export const FooterDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 30px;
    background-color: ${darkGrayLabenu};
    padding: 1vh 1vw;
    color: ${paleTealLabenu};
    font-size: 0.65em;
`

export const Labex = styled.span`
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
    :hover {
        color: ${orangeLabenu};
        cursor: pointer;
    };
`

export const PrivacyPolicy = styled.span`
    grid-column: 3/4;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
    :hover {
            color: ${orangeLabenu};
            cursor: pointer;
        };

`

export const Social = styled.span`
    grid-column: 2/3;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
`

export const ImageGray = styled.img`
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
    border: 2px solid ${darkGrayLabenu};
    border-radius: 50%;
    :hover {
        border: 2px solid ${orangeLabenu};
        /* display: none; */
    };
`

// export const ImageColor = styled.img`
//     height: 20px;
//     margin-left: 10px;
//     margin-right: 10px;
//     border: 2px solid ${darkGrayLabenu};
//     border-radius: 50%;
//     display:none;
//     :hover {
//         display: inline;
//     };
// `

