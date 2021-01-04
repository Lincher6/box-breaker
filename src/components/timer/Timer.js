import React, {useEffect, useRef, useState} from 'react';
import {Container} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "store";

export const Timer = () => {
    const [value, setValue] = useState('');
    const time = useSelector(selectors.time);
    const isPaused = useSelector(selectors.isPaused);
    const dispatch = useDispatch();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const timer = useRef();

    useEffect(() => {
        setValue(`${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
    }, [time]);

    const validateInput = () => {
        let time;
        if (value.match(/^[0-6][0-9]:[0-6][0-9]$/)) {
            const [ minutes, seconds ] = value.split(':');
            time = (minutes * 60 * 1000) + (seconds * 1000);
        } else {
            time = 60 * 1000;
        }
        dispatch(actions.setTime(new Date(time)));
    };

    const handleKeyDown = event => {
        if (event.code === 'Enter') {
            validateInput();
            event.target.blur()
        }
    }

    useEffect(() => {
        if (isPaused) {
            clearInterval(timer.current);
        } else {
            timer.current = setInterval(() => {
                dispatch(actions.countdown());
            }, 1000);
        }
    }, [isPaused]);

    return (
        <Container
            value={value}
            onChange={event => setValue(event.target.value)}
            onBlur={validateInput}
            onKeyDown={handleKeyDown}
            disabled={!isPaused}
        />
    )
}