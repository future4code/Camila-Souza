import React from 'react';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import underConstruction from "../../assets/Images/underConstruction.png";
import underConstructionMobile from "../../assets/Images/underConstructionMobile.png";
import { getBreakPoint, useWindowSize } from "../../hooks/useWindowSize";
import { UnderConstructionContainer, UnderConstructionImage } from "./styled";

const UnderConstructionPage = ()=> {
  useUnprotectedPage()
  const tamanhoTela = useWindowSize()
    getBreakPoint()
    if (tamanhoTela === "sm") {
        return (
            <UnderConstructionContainer>
                <UnderConstructionImage src={underConstructionMobile} alt={"Ops! Tivemos um problema!"} />
            </UnderConstructionContainer>
        )
    } else {
        return(
            <UnderConstructionContainer>
                <UnderConstructionImage src={underConstruction} alt={"Ops! Tivemos um problema!"} />
            </UnderConstructionContainer>
        )
        }
}

export default UnderConstructionPage;

