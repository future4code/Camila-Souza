import React from "react";
import { goToHomePage, goToLoginPage } from "../../router/goToPages";
import { HeaderDiv, Labex, Login } from "./styled";
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    return (
        <HeaderDiv>
            <Labex onClick={() => goToHomePage(history)}>
                LabeX
            </Labex>
            <Login onClick={() => goToLoginPage(history)}>
                Login
            </Login>
        </HeaderDiv>
    )
};
 export default Header;