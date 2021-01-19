import React from "react";
import { Container } from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useSelector} from "react-redux";
import {selectors} from "store";

export const LoadingOverlay = () => {
    const loading = useSelector(selectors.loading);

    if (!loading) {
        return null;
    }

    return (
        <Container>
            <CircularProgress size={200}/>
        </Container>
    )
}