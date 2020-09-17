import styled from "styled-components";
import TripImage from "../../images/rocketlaunch.jpg";
import { darkGrayLabenu, lightYellowLabenu, orangeLabenu, paleTealLabenu } from "../../constants/colors";

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
    background-color: ${darkGrayLabenu};
    color: ${lightYellowLabenu};
    :hover {
        background-color: ${orangeLabenu};
        color: ${paleTealLabenu};
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