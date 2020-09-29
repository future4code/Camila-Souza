import React from "react";
import { useHistory } from "react-router-dom";
import { FooterDiv, Labex, Social, PrivacyPolicy, IconsFlex, ImageGray } from "./styled";
import FacebookIcon from "../../images/icons/Circle Grey/Facebook_1.png";
import TwitterIcon from "../../images/icons/Circle Grey/Twitter_1.png";
import YoutubeIcon from "../../images/icons/Circle Grey/Youtube_1.png";
import WhatsAppIcon from "../../images/icons/Circle Grey/WhatsApp_1.png";
import LinkedINIcon from "../../images/icons/Circle Grey/Linkedin_1.png";
import { urlFacebook, urlLinkedIn, urlTwitter, urlWhatsApp, urlYouTube } from "../../constants/urls";
import { goToHomePage, goToLoginPage } from "../../router/goToPages";


const Footer = () => {
    const history = useHistory();
    return (
        <FooterDiv>
            <Labex onClick= {()=> goToHomePage(history)}>LabeX©</Labex>
            <PrivacyPolicy onClick= {()=> goToLoginPage(history)}>Privacy Policy</PrivacyPolicy>
            <Social>
                <a href= {urlFacebook} target= "blank"><ImageGray src= {FacebookIcon} alt="Facebook" id="fb"/ ></a>
                <a href= {urlTwitter} target="blank"><ImageGray src= {TwitterIcon} alt="Twitter" id="tw"/ ></a>
                <a href= {urlYouTube} target="blank"><ImageGray src= {YoutubeIcon} alt="YouTube" id="yt"/ ></a>
                <a href= {urlWhatsApp} target="blank"><ImageGray src= {WhatsAppIcon} alt="WhatsApp" id="wa"/ ></a>
                <a href= {urlLinkedIn} target="blank"><ImageGray src= {LinkedINIcon} alt="LinkedIN" id="li"/ ></a>
            </Social>
        </FooterDiv>
    )
};

export default Footer;