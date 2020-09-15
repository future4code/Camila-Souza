import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage, goToApplicationPage, goToCreateTripPage, goToListTripPage, goToLoginPage, goToTripDetailsPage } from "../../router/goToPages";

const TripDetailsPage = () => {
    const history = useHistory();
    
    return (
        <div>
            <p>TripDetailsPage</p>
        </div>
    )
};

export default TripDetailsPage;