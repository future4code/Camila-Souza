import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage, goToApplicationPage, goToCreateTripPage, goToListTripPage, goToLoginPage, goToTripDetailsPage } from "../../router/goToPages";

const ApplicationPage = () => {
    const history = useHistory();
    
    return (
        <div>
            <p>ApplicationPage</p>
        </div>
    )
};

export default ApplicationPage;