import React from "react";
import { ErrorContainer, ErrorImage } from "./styled";
import ErrorImgDesktop from "../../assets/Images/ErrorCutePuppyKitten.jpg";
import ErrorImgMobile from "../../assets/Images/ErrorCuteMobile.png";
import { getBreakPoint, useWindowSize } from "../../hooks/useWindowSize";

const ErrorPage = ()=>{
    const tamanhoTela = useWindowSize()
    getBreakPoint()
    if (tamanhoTela === "sm") {
        return (
            <ErrorContainer>
                <ErrorImage src={ErrorImgMobile} alt={"Ops! Tivemos um problema!"} />
            </ErrorContainer>
        )
    } else {
        return(
            <ErrorContainer>
                <ErrorImage src={ErrorImgDesktop} alt={"Ops! Tivemos um problema!"} />
            </ErrorContainer>
        )
        }
}
export default ErrorPage;