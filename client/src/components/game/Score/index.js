import React from 'react';
import { Container, Counter } from './styles';
import { useSelector } from 'react-redux';
import { gameSelectors } from 'store/game';

export const Score = () => {
    const score = useSelector(gameSelectors.score);

    return (
        <Container>
            Score: <Counter>{score}</Counter>
        </Container>
    )
}