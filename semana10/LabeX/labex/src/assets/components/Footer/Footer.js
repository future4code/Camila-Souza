import React from "react";
import { FooterDiv, Labex, Social, PrivacyPolicy, Image, IconsFlex } from "./styled";
import FacebookIcon from "../../images/icons/Circle Grey/Facebook_1.png";
import TwitterIcon from "../../images/icons/Circle Grey/Twitter_1.png";
import YoutubeIcon from "../../images/icons/Circle Grey/Youtube_1.png";
import WhatsAppIcon from "../../images/icons/Circle Grey/WhatsApp_1.png";
import LinkedINIcon from "../../images/icons/Circle Grey/Linkedin_1.png";


const Footer = () => {
    return (
        <FooterDiv>
            <Labex>LabeX©</Labex>
            <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
            <Social>
                <IconsFlex>
                    <Image src= {FacebookIcon} alt="Facebook"></Image>
                    <Image src= {TwitterIcon} alt="Twitter"></Image>
                    <Image src= {YoutubeIcon} alt="YouTube"></Image>
                    <Image src= {WhatsAppIcon} alt="WhatsApp"></Image>
                    <Image src= {LinkedINIcon} alt="LinkedIN"></Image>
                </IconsFlex>
            </Social>
        </FooterDiv>
    )
};

export default Footer;