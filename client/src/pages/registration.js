import React from "react"
import {Title} from "components";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import {Registration} from "components";

export const RegistrationPage = () => {
    return (
        <div className='app column'>
            <Title/>
            <Registration/>
            <Typography>
                Already have an account?
                <NavLink to="/login">
                    <Typography
                        color='primary'
                        component='span'
                        style={{ marginLeft: 10 }}
                    >
                        Login
                    </Typography>
                </NavLink>
            </Typography>
        </div>
    )
}