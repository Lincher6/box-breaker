import React from "react"
import { Container, Controls } from "./styles";
import { Span } from "globalStyles";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AdminIcon from '@material-ui/icons/AccountCircle';
import { useDispatch, useSelector } from "react-redux";
import { usersActions, usersSelectors } from "store/users";
import { PRIMARY, SECONDARY } from "lib/constants";
import Button from "@material-ui/core/Button";
import { NavLink, useHistory } from "react-router-dom";

export const UserCard = () => {
    const { name, hiScore, role } = useSelector(usersSelectors.user);
    const history = useHistory();
    const dispatch = useDispatch();

    const logout = async () => {
        dispatch(usersActions.logout(history));
    }

    return (
        <Container>
            <Typography>
                Name:
                <Span color={PRIMARY} weight={600}>
                    {name || '-'}
                </Span>
            </Typography>
            <Typography>
                Hi-score:
                <Span color={SECONDARY} weight={600}>
                    {hiScore || 0}
                </Span>
            </Typography>
            <Controls>
                <NavLink to={'/admin'} className={role !== 'admin' ? 'disabled' : ''}>
                    <Button
                        color='primary'
                        size='small'
                        variant='contained'
                    >
                        <AdminIcon/> <Span>Admin</Span>
                    </Button>
                </NavLink>
                <Button
                    color='secondary'
                    size='small'
                    variant='contained'
                    onClick={logout}
                >
                    <ExitToAppIcon/> <Span>Logout</Span>
                </Button>
            </Controls>
        </Container>
    )
}