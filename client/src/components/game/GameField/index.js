import React, { useEffect, useRef } from 'react';
import { Container, PauseScreen, PauseText } from './styles';
import { getIdGenerator, getOffset, showPopUp } from 'lib/utils';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions, gameSelectors } from 'store/game';
import { flash, checkPosition, getComponent } from './utils';
import { SECONDARY } from 'lib/constants';
import { soundManager } from 'lib/soundManager';

const nextId = getIdGenerator();

export const GameField = () => {
    const elements = useSelector(gameSelectors.elements);
    const isPaused = useSelector(gameSelectors.isPaused);
    const gameStatus = useSelector(gameSelectors.gameStatus);
    const dispatch = useDispatch();

    const fieldRef = useRef(null);
    const {current: $field} = fieldRef;
    const timer = useRef();
    const positions = useRef([]);

    const handleShot = event => {
        const {type, id} = event.target.dataset;
        if (type) {
            const element = elements.find(el => el.id === id);
            const {elementsToCreate, points} = element;
            dispatch(gameActions.addScore(points));
            dispatch(gameActions.removeElement(id));
            createElements(elementsToCreate);
            flash({event, $field});
            showPopUp({ event, $field, text: `+${points}`, color: SECONDARY });
        } else {
            soundManager.playMiss();
        }
    }

    const createElements = (amount) => {
        for (let i = 0; i < amount; i++) {
            const top = getOffset($field.clientHeight);
            const left = getOffset($field.clientWidth);
            if (checkPosition(positions.current, {top, left})) {
                i--;
                continue;
            }
            positions.current.push({top, left});
            dispatch(gameActions.addElement({
                ...getComponent(),
                id: nextId(),
                top,
                left
            }));
        }
    };

    useEffect(() => {
        dispatch(gameActions.setField(fieldRef.current));
        return () => clearTimeout(timer.current);
    }, []);

    useEffect(() => {
        if (isPaused) {
            clearTimeout(timer.current);
        } else {
            timer.current = setInterval(() => {
                createElements(1);
            }, 3000);
            fieldRef.current.focus();
        }
    }, [isPaused]);

    useEffect(() => {
        if (gameStatus.active) {
            createElements(4);
        } else {
            clearTimeout(timer.current);
        }
    }, [gameStatus]);

    return (
        <Container
            ref={fieldRef}
            onMouseDown={handleShot}
            active={gameStatus.active && !isPaused}
            isPaused={isPaused && gameStatus.active}
        >
            {elements.map(({Component, ...data}) => {
                return (
                    <Component
                        key={data.id}
                        {...data}
                    />
                )
            })}

            {
                isPaused && gameStatus.active &&
                <PauseScreen>
                    <PauseText>PAUSED</PauseText>
                </PauseScreen>
            }
        </Container>
    )
};