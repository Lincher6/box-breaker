import React, {useEffect, useState} from 'react';
import {GamePage, LoginPage, Page404, RegistrationPage} from "pages";
import { Switch, Route } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from "./containers";
import {LoadingOverlay} from "./components";
import {useUser} from "./lib/hooks/useUser";
import {useDispatch} from "react-redux";
import {actions} from "./store";

export function App() {
    const dispatch = useDispatch();
    const userId = useUser();

    useEffect(async () => {
        dispatch(actions.initializeApp(userId))
    }, [])

    return (
        <>
            <LoadingOverlay/>
            <Switch>
                <ProtectedRoute exact path='/' component={GamePage}/>
                <AuthRoute exact path='/login' component={LoginPage}/>
                <AuthRoute exact path='/registration' component={RegistrationPage}/>
                <Route exact path='*' component={Page404}/>
            </Switch>
        </>

    );
}
