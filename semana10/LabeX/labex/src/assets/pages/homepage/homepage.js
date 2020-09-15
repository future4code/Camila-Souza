import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import { goToApplicationPage, goToCreateTripPage, goToListTripPage, goToLoginPage, goToTripDetailsPage } from "../../router/goToPages";

const HomePage = () => {
    const history = useHistory();
    
    return (
        <div>
            <Header />
            <p>HomePage</p>
            <button onClick={() => goToApplicationPage(history)}>
                ApplicationPage
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

export default HomePage;