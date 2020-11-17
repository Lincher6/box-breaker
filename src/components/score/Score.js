import React from 'react'
import {Container} from "./styles";
import {useContextState} from "context/Context";

export const Score = () => {
    const {score} = useContextState()

    return (
        <Container>
            Score: {score}
        </Container>
    )
}