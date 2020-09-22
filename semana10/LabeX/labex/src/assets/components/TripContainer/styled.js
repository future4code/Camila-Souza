import styled from "styled-components";
import TripImage from "../../images/rocketlaunch.jpg";
import { darkGrayLabenu, orangeLabenu, paleTealLabenu } from "../../constants/colors";

export const TripContainer= styled.span`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3fr 1fr;
    background-image: ${TripImage};
    width: 50vw;
`

export const ApplicationButton= styled.button`
    grid-column: 1/3;
    grid-row: 2/3;
    justify-self: center;
    align-self: center;
    border-radius: 10px;
    border: thin solid ${darkGrayLabenu};
    background-color: ${darkGrayLabenu};
    color: ${paleTealLabenu};
    font-weight: bold;
    :hover {
        border: thin solid ${orangeLabenu};
        background-color: ${orangeLabenu};
        color: ${darkGrayLabenu};
    }
`

export const TripTextContainer= styled.span`
    grid-column: 1/3;
    grid-row: 1/2;
    font-size: 1.2em;
    text-align: right;
    justify-self: right;
    align-self: center;
`