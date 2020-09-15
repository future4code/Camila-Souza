import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage, goToApplicationPage, goToCreateTripPage, goToListTripPage, goToLoginPage, goToTripDetailsPage } from "../../router/goToPages";

const HomePage = () => {
    const history = useHistory();
    
    return (
        <div>
            <p>HomePage</p>
        </div>
    )
};

export default HomePage;