import React, {useCallback, useEffect, useRef} from 'react'
import {Container} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "store";
import {soundManager} from "lib/soundManager";
import {showPopUp} from "lib/utils";

export const TimeEater = React.memo(({ id, ...props }) => {
    const $field = useSelector(selectors.$field);
    const isPaused = useSelector(selectors.isPaused);
    const dispatch = useDispatch();

    const element = useRef();

    const timeDown = useCallback((event) => {
        showPopUp({ event, $field, text: '-5sec' });
        dispatch(actions.subtractTime(5000));
        dispatch(actions.removeElement(id));
        soundManager.playTimeDown();
    }, []);

    useEffect(() => {
        if (isPaused) {
            element.current.classList.add('stop');
        } else {
            element.current.classList.remove('stop');
        }
    }, [isPaused]);

    const handleClick = () => {
        dispatch(actions.addScore(2));
        dispatch(actions.removeElement(id));
    };

    return (
        <Container
            onAnimationEnd={timeDown}
            ref={element}
            onClick={handleClick}
            data-type="timeEaters"
            {...props}
        />
    );
});