import React, { useLayoutEffect } from 'react';
import { AdminPage, GamePage, LoginPage, Page404, RegistrationPage} from "pages";
import { Switch, Route } from 'react-router-dom';
import { AdminRoute, AuthRoute, ProtectedRoute } from "components/common";
import { useToken } from "./lib/hooks/useToken";
import { useDispatch } from "react-redux";
import { appActions } from "store/app";
import { LoadingOverlay } from "components/common";
import { useError } from './lib/hooks/useError';

export function App() {
    const dispatch = useDispatch();
    const user = useToken();
    const { errorModal } = useError();

    useLayoutEffect(() => {
        if (user) {
            const init = async () => {
                dispatch(appActions.initializeApp());
            }
            init();
        }
    }, [])

    return (
        <>
            {errorModal}
            {<LoadingOverlay user={user}/>}
            <Switch>
                <ProtectedRoute exact path='/' component={GamePage}/>
                <AuthRoute exact path='/login' component={LoginPage}/>
                <AuthRoute exact path='/registration' component={RegistrationPage}/>
                <AdminRoute exact path='/admin' component={AdminPage}/>
                <Route path='*' component={Page404}/>
            </Switch>
        </>

    );
}
