import React from "react"
import { Redirect, Route } from "react-router-dom";
import { useToken } from "lib/hooks/useToken";

export const ProtectedRoute = props => {
    const user = useToken();

    if (!user) {
        return <Redirect to='/login'/>
    }

    return (
        <Route { ...props } />
    )
};