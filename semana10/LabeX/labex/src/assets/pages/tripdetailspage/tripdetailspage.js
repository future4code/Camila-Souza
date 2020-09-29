import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { goToHomePage, goToApplicationPage, goToCreateTripPage, goToListTripPage, goToLoginPage } from "../../router/goToPages";

const TripDetailsPage = () => {
    const history = useHistory();
    
    return (
        <div>
            <Header />
            <p>TripDetailsPage</p>
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
            <button onClick={() => goToHomePage(history)}>
                HomePage
            </button>
            <Footer />
        </div>
    )
};

export default TripDetailsPage;