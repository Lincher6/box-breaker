import React from "react"
import { Title } from "components/common";
import { LoginForm } from "components/users";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { Layout } from 'containers/Layout';
import { Column } from 'globalStyles';

export const LoginPage = () => {
    return (
        <Layout>
            <Column>
                <Title/>
                <LoginForm/>
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
            </Column>
        </Layout>
    )
}