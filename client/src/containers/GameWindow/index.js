import React from 'react';
import { Container } from "./styles";

export const GameWindow = ({children, ...props}) => {
    return (
        <Container { ...props }>
            {children}
        </Container>
    )
}