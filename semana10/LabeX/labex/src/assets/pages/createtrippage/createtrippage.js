import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import { goToHomePage, goToApplicationPage, goToCreateTripPage, goToListTripPage, goToLoginPage, goToTripDetailsPage } from "../../router/goToPages";

const CreateTripPage = () => {
    const history = useHistory();
    
    return (
        <div>
            <Header />
            <p>CreateTripPage</p>
            <button onClick={() => goToApplicationPage(history)}>
                ApplicationPage
            </button>
            <button onClick={() => goToHomePage(history)}>
                HomePage
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

export default CreateTripPage;