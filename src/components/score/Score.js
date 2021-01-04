import React from 'react';
import {Container, Counter} from "./styles";
import {useSelector} from "react-redux";
import {selectors} from "store";

export const Score = () => {
    const score = useSelector(selectors.score);

    return (
        <Container>
            Score: <Counter>{score}</Counter>
        </Container>
    )
}