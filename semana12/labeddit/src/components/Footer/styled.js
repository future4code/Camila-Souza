import styled from "styled-components";
import { PrimaryColor, SecondaryColor } from "../../constants/colors";

export const FooterContainer = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    background-color: ${SecondaryColor};
    color: ${PrimaryColor};
    height: 1vh;
    padding-left: 2vw;
    padding-right: 2vw;
    font-size: 0.7em;
`
