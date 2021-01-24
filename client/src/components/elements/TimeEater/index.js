import React, {useCallback, useEffect, useRef} from 'react'
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions, gameSelectors } from 'store/game';
import { soundManager } from 'lib/soundManager';
import { showPopUp } from 'lib/utils';

export const TimeEater = React.memo(({ id, ...props }) => {
    const $field = useSelector(gameSelectors.$field);
    const isPaused = useSelector(gameSelectors.isPaused);
    const dispatch = useDispatch();

    const element = useRef();

    const timeDown = useCallback((event) => {
        showPopUp({ event, $field, text: '-5sec' });
        dispatch(gameActions.subtractTime(5000));
        dispatch(gameActions.removeElement(id));
        soundManager.playTimeDown();
    }, []);

    useEffect(() => {
        if (isPaused) {
            element.current.classList.add('stop');
        } else {
            element.current.classList.remove('stop');
        }
    }, [isPaused]);

    return (
        <Container
            onAnimationEnd={timeDown}
            ref={element}
            data-type='timeEaters'
            data-id={id}
            {...props}
        />
    );
});