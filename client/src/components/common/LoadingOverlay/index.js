import React, { useState } from "react";
import {Container, Logo} from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from "react-redux";
import { appSelectors } from "store/app";
import { Title } from 'components/common';

export const LoadingOverlay = ({ user }) => {
    const [show, setShow] = useState(!!user);
    const loading = useSelector(appSelectors.loading);

    return (
        show && <Container
            style={{ animation: `${loading ? null : 'fadeOut .5s linear'}` }}
            onAnimationEnd={() => setShow(false)}
        >
            <Logo>
                <Title/>
            </Logo>
            <CircularProgress size={220}/>
        </Container>
    )
};