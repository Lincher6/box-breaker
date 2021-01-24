import React from "react"
import { Redirect, Route } from "react-router-dom";
import { useToken } from "lib/hooks/useToken";

export const AuthRoute = props => {
    const user = useToken();

    if (user) {
        return <Redirect to='/'/>
    }

    return (
        <Route { ...props } />
    )
}