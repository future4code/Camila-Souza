import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import ApplicationPage from "../pages/applicationformpage/ApplicationFormPage";
import CreateTripPage from "../pages/createtrippage/CreateTripPage";
import ListTripPage from "../pages/listtripspage/ListTripsPage";
import LoginPage from "../pages/loginpage/LoginPage";
import TripDetailsPage from "../pages/tripdetailspage/TripDetailsPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/incricao">
                    <ApplicationPage />
                </Route>
                <Route exact path="/criarviagem">
                    <CreateTripPage />
                </Route>
                <Route exact path="/listadeviagens">
                    <ListTripPage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/detalhesdaviagem">
                    <TripDetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router