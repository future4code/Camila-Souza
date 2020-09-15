import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import { goToHomePage, goToCreateTripPage, goToListTripPage, goToLoginPage, goToTripDetailsPage } from "../../router/goToPages";

const ApplicationPage = () => {
    const history = useHistory();
    
    return (
        <div>
            <Header />
            <p>ApplicationPage</p>
            <button onClick={() => goToHomePage(history)}>
                HomePage
            </button>
            <button onClick={() => goToCreateTripPage(history)}>
                CreateTripPage
            </button>
            <button onClick={() => goToListTripPage(history)}>
                ListTripPage
            </button>
            <button onClick={() => goToLoginPage(history)}>
                LoginPage
            </button>
            <button onClick={() => goToTripDetailsPage(history)}>
                TripDetailsPage
            </button>
        </div>
    )
};

export default ApplicationPage;