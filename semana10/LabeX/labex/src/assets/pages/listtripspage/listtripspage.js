import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage, goToApplicationPage, goToCreateTripPage, goToListTripPage, goToLoginPage, goToTripDetailsPage } from "../../router/goToPages";

const ListTripPage = () => {
    const history = useHistory();
    
    return (
        <div>
            <p>ListTripPage</p>
        </div>
    )
};

export default ListTripPage;