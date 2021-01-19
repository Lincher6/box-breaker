import React from "react"
import { Redirect, Route } from "react-router-dom";
import {useUser} from "lib/hooks/useUser";

export const ProtectedRoute = props => {
    const userId = useUser();

    if (!userId) {
        return <Redirect to='/login'/>
    }

    return (
        <Route { ...props } />
    )
}