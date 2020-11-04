import React from "react";
import { LoadingContainer, LoadingGif } from "./styled";
import LoadingImage from "../../assets/Images/loading.gif";

const Loading = () =>{
    return(
        <LoadingContainer>
            <LoadingGif src={LoadingImage}/>
        </LoadingContainer>
    )
}
export default Loading;