import React from 'react'
import { Container } from "./styles";

export const Box = React.memo(props => {
    return (
        <Container
            { ...props }
        />
    )
})