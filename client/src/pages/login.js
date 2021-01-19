import React from "react"
import {Login, Title} from "components";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";

export const LoginPage = () => {
    return (
        <div className='app column'>
            <Title/>
            <Login/>
            <Typography>
                New user?
                <NavLink to="/registration">
                    <Typography
                        color='primary'
                        component='span'
                        style={{ marginLeft: 10 }}
                    >
                        Registration
                    </Typography>
                </NavLink>
            </Typography>
        </div>
    )
}