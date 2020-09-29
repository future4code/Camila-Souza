import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { goToApplicationPage, goToCreateTripPage, goToListTripPage, goToLoginPage, goToTripDetailsPage } from "../../router/goToPages";
import { HomePageContainer, RocketLaunch } from "./styled";
import TripContainerA from "../../components/TripContainer/tripcontainer"

const HomePage = () => {
    const history = useHistory();
    
    return (
        <div>
            <Header />
            <HomePageContainer>
                <TripContainerA></TripContainerA>
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
            </HomePageContainer>
            <Footer />
        </div>
    )
};

export default HomePage;