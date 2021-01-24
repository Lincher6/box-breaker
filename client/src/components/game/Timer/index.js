import React, {useEffect, useRef, useState} from 'react';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions, gameSelectors } from 'store/game';
import { MINUTE } from 'lib/constants';

export const Timer = () => {
    const [value, setValue] = useState('');
    const time = useSelector(gameSelectors.time);
    const isPaused = useSelector(gameSelectors.isPaused);
    const { active } = useSelector(gameSelectors.gameStatus);
    const dispatch = useDispatch();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const timer = useRef();

    useEffect(() => {
        setValue(`${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
    }, [time]);

    useEffect(() => {
        return () => clearInterval(timer.current);
    }, [])

    const validateInput = () => {
        let time;
        if (value.match(/^[0-6][0-9]:[0-6][0-9]$/)) {
            const [ minutes, seconds ] = value.split(':');
            time = (minutes * MINUTE) + (seconds * 1000);
        } else {
            time = MINUTE;
        }
        dispatch(gameActions.setTime(new Date(time)));
    };

    const handleKeyDown = event => {
        if (event.code === 'Enter') {
            validateInput();
            event.target.blur();
        }
    }

    useEffect(() => {
        if (isPaused) {
            clearInterval(timer.current);
        } else {
            timer.current = setInterval(() => {
                dispatch(gameActions.countdown());
            }, 1000);
        }
    }, [isPaused]);

    return (
        <div style={{ display: `flex`, alignItems: 'center'}}>
            <AccessAlarmIcon/>
            <Container
                value={value}
                onChange={event => setValue(event.target.value)}
                onBlur={validateInput}
                onKeyDown={handleKeyDown}
                disabled={!isPaused || !active}
                active={isPaused && active}
            />
        </div>
    )
}