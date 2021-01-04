import React, {useEffect, useRef} from 'react'
import {Container} from "./styles";
import {getComponent, getIdGenerator, getOffset, showPopUp} from "lib/utils";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "store";
import {flash, checkHitBox, checkPosition} from "./GameField.lib";
import {SECONDARY} from "lib/constants";

const nextId = getIdGenerator();

export const GameField = () => {
    const elements = useSelector(selectors.elements);
    const isPaused = useSelector(selectors.isPaused);
    const gameStatus = useSelector(selectors.gameStatus);
    const dispatch = useDispatch();

    const fieldRef = useRef(null);
    const {current: $field} = fieldRef;
    const timer = useRef();
    const positions = useRef([]);

    const handleShot = event => {
        const {type} = event.target.dataset;
        const data = checkHitBox(type);
        if (data) {
            createElements(data.elementsToCreate);
            flash({event, $field});
            showPopUp({ event, $field, text: `+${data.points}`, color: SECONDARY });
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
            dispatch(actions.addElement({
                id: nextId(),
                Component: getComponent(),
                top,
                left
            }));
        }
    };

    useEffect(() => {
        dispatch(actions.setField(fieldRef.current));
    }, []);

    useEffect(() => {
        if (isPaused) {
            clearTimeout(timer.current);
        } else {
            timer.current = setInterval(() => {
                createElements(1);
            }, 3000);
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
            onClick={handleShot}
            active={gameStatus.active && !isPaused}
            isPaused={isPaused && gameStatus.active}
        >
            {elements.map(({Component, ...data}) => {
                return (
                    <Component
                        key={data.id}
                        id={data.id}
                        top={data.top}
                        left={data.left}
                    />
                )
            })}
        </Container>
    )
};