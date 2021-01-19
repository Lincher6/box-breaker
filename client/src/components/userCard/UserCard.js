import React from "react"
import {Container, Controls, Span} from "./styles";
import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "store";
import {PRIMARY, SECONDARY} from "lib/constants";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

export const UserCard = () => {
    const { name, hiScore } = useSelector(selectors.user);
    const history = useHistory();
    const dispatch = useDispatch();

    const logout = async () => {
        dispatch(actions.logout(history));
    }

    return (
        <Container>
            <Typography>
                Name:
                <Span color={PRIMARY}>
                    {name || '-'}
                </Span>
            </Typography>
            <Typography>
                Hi-score:
                <Span color={SECONDARY}>
                    {hiScore || 0}
                </Span>
            </Typography>
            <Controls>
                <Button
                    color='secondary'
                    size='small'
                    variant='contained'
                    onClick={logout}
                >
                    Logout
                </Button>
            </Controls>
        </Container>
    )
}