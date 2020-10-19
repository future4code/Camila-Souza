import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../screens/LoginPage/LoginPage";
import SignUpPage from "../screens/SignUpPage/SignUpPage";
import PostPage from "../screens/PostPage/PostPage";
import FeedPage from "../screens/FeedPage/FeedPage";
import ErrorPage from "../screens/ErrorPage/ErrorPage";
import UnderConstructionPage from "../screens/UnderConstructionPage/UnderConstructionPage";

const Router = (props)=>{
    return(
        <Switch>
            <Route exact path={"/login"}>
                <LoginPage setButtonName={props.setButtonName} />
            </Route>
            <Route exact path={"/cadastro"}>
                <SignUpPage setButtonName={props.setButtonName} />
            </Route>
            <Route exact path={"/post"}>
                <PostPage />
            </Route>
            <Route exact path={"/feed"}>
                <FeedPage />
            </Route>
            <Route exact path={"/underconstruction"}>
                <UnderConstructionPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}
export default Router;