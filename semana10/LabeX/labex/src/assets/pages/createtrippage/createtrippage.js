import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage, goToApplicationPage, goToCreateTripPage, goToListTripPage, goToLoginPage, goToTripDetailsPage } from "../../router/goToPages";

const CreateTripPage = () => {
    const history = useHistory();
    
    return (
        <div>
            <p>CreateTripPage</p>
        </div>
    )
};

export default CreateTripPage;