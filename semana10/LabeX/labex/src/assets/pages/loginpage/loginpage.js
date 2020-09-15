import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import { goToHomePage, goToApplicationPage, goToCreateTripPage, goToListTripPage, goToTripDetailsPage } from "../../router/goToPages";

const LoginPage = () => {
    const history = useHistory();
    
    return (
        <div>
            <Header />
            <p>LoginPage</p>
            <button onClick={() => goToApplicationPage(history)}>
                ApplicationPage
            </button>
            <button onClick={() => goToCreateTripPage(history)}>
                CreateTripPage
            </button>
            <button onClick={() => goToListTripPage(history)}>
                ListTripPage
            </button>
            <button onClick={() => goToHomePage(history)}>
                HomePage
            </button>
            <button onClick={() => goToTripDetailsPage(history)}>
                TripDetailsPage
            </button>
        </div>
    )
};

export default LoginPage;