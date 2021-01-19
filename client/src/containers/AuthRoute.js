import React from "react"
import { Redirect, Route } from "react-router-dom";
import {useUser} from "lib/hooks/useUser";

export const AuthRoute = props => {
    const userId = useUser();

    if (userId) {
        return <Redirect to='/'/>
    }

    return (
        <Route { ...props } />
    )
}