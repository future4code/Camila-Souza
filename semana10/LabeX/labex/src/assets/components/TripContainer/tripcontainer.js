import React from "react";
import { goToApplicationPage } from "../../router/goToPages";
import { useHistory } from "react-router-dom";
import TripImage from "./styled";
import { TripContainer, TripTextContainer, ApplicationButton } from "./styled"

const TripContainerA = () => {
    const history = useHistory();

    return (
        <TripContainer>
            <TripTextContainer>
                Nome da Viagem
            </TripTextContainer>
            <ApplicationButton onClick={()=>goToApplicationPage(history)}>Increver-se</ApplicationButton>
        </TripContainer>
    );
};

export default TripContainerA;