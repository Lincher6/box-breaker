import React from "react"
import { Title } from "components/common";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { RegistrationForm } from "components/users";
import { Layout } from 'containers/Layout';
import { Column } from 'globalStyles';

export const RegistrationPage = () => {
    return (
        <Layout>
            <Column>
                <Title/>
                <RegistrationForm/>
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
            </Column>
        </Layout>
    )
}