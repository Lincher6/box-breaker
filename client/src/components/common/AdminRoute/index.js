import React from "react"
import { Redirect, Route } from "react-router-dom";
import { useToken } from "lib/hooks/useToken";

export const AdminRoute = props => {
    const user = useToken();

    if (!user) {
        return <Redirect to='/login'/>
    }

    if (user.role !== 'admin') {
        return <Redirect to='/'/>
    }

    return (
        <Route { ...props } />
    )
};