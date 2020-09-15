import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage, goToApplicationPage, goToCreateTripPage, goToListTripPage, goToLoginPage, goToTripDetailsPage } from "../../router/goToPages";

const LoginPage = () => {
    const history = useHistory();
    
    return (
        <div>
            <p>LoginPage</p>
        </div>
    )
};

export default LoginPage;