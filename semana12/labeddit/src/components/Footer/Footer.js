import React from "react";
import { useHistory } from "react-router-dom";
import { goToUnderConstructionPage } from "../../routes/Coordinator";
import { FooterContainer, LabEdditButton, PrivacyPolicyButton } from "./styled";

const Footer = ()=>{
    const history = useHistory()
    const UnderConstructionPage = ()=>{
        goToUnderConstructionPage(history)
    }
    return(
        <FooterContainer>
            <LabEdditButton onClick={UnderConstructionPage}>©LabEddit</LabEdditButton>
            <PrivacyPolicyButton onClick={UnderConstructionPage}>Política de Privacidade</PrivacyPolicyButton>
        </FooterContainer>
    )
}
export default Footer;