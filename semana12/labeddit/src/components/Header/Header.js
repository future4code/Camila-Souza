import React from "react";
import { HeaderButtons, HeaderContainer } from "./styled";
import { useHistory } from "react-router-dom";
import { goToLogin, goToPostsFeed } from "../../routes/Coordinator";

const Header = (props)=>{
    const {buttonName, setButtonName} = props
    const history = useHistory()

    const logout = ()=>{
        localStorage.removeItem("token")
    }
    const AppBarAction = ()=>{
        const token = localStorage.getItem("token")
        if (token){
            logout()
            setButtonName("Login")
        }
        goToLogin(history)
    }
    const LabEddit = ()=>{
        const token = localStorage.getItem("token")
        if (token) {
            goToPostsFeed(history)
        } else{
            goToLogin(history)
        }
    }
    return(
        <HeaderContainer>
            <HeaderButtons onClick={LabEddit}>LabEddit</HeaderButtons>
            <HeaderButtons onClick={AppBarAction}>{buttonName}</HeaderButtons>
        </HeaderContainer>
    )
}
export default Header;