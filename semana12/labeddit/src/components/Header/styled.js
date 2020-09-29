import styled from "styled-components";
import { PrimaryColor, SecondaryColor } from "../../constants/colors";

export const HeaderContainer = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    background-color: ${PrimaryColor};
    color: ${SecondaryColor};
    height: 2vh;
    padding-left: 2vw;
    padding-right: 2vw;
`
