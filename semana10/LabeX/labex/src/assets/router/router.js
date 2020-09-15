import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/homepage/homepage";
import ApplicationPage from "../pages/applicationformpage/applicationformpage"
import CreateTripPage from "../pages/createtrippage/createtrippage";
import ListTripPage from "../pages/listtripspage/listtripspage";
import LoginPage from "../pages/loginpage/loginpage";
import TripDetailsPage from "../pages/tripdetailspage/tripdetailspage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/application-form">
                    <ApplicationPage />
                </Route>
                <Route exact path="/trip/create">
                    <CreateTripPage />
                </Route>
                <Route exact path="/trip/list">
                    <ListTripPage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/trip/details">
                    <TripDetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router