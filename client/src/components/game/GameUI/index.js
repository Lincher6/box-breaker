import React, { useEffect } from 'react';
import { Container, Controls, Info } from './styles';
import Button from '@material-ui/core/Button';
import { Timer, Score } from 'components/game';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions, gameSelectors } from 'store/game';

export const GameUI = () => {
    const { active } = useSelector(gameSelectors.gameStatus);
    const isPaused = useSelector(gameSelectors.isPaused);
    const dispatch = useDispatch();

    const handleStart = () => {
        dispatch(gameActions.startGame());
    };
    
    const handlePause = () => {
        dispatch(gameActions.pauseGame());
    };

    const handleKeyDown = event => {
        if (event.code === 'Space' && active) {
            event.preventDefault();
            dispatch(gameActions.pauseGame());
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [active]);

    return (
        <Container>
            <Controls>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={handlePause}
                    disabled={!active}
                >
                    {isPaused ? 'RESUME' : 'PAUSE'}
                </Button>
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={handleStart}
                >
                    {active ? 'RESTART' : 'NEW GAME'}
                </Button>
            </Controls>

            <Info>
                <Timer/>
                <Score/>
            </Info>
        </Container>
    )
}