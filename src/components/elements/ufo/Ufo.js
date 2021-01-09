import React, {useEffect, useRef} from 'react'
import {Container} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "store";
import {removeElement} from "store/actions";
import ufoImg from 'assets/UFO.png';

export const Ufo = React.memo(({id, ...props}) => {
    const isPaused = useSelector(selectors.isPaused);
    const dispatch = useDispatch();

    const element = useRef();

    const handleRemove = () => {
        dispatch(removeElement(id));
    }

    useEffect(() => {
        if (isPaused) {
            element.current.classList.add('stop');
        } else {
            element.current.classList.remove('stop');
        }
    }, [isPaused]);

    return (
        <Container
            draggable={false}
            src={ufoImg}
            onAnimationEnd={handleRemove}
            ref={element}
            {...props}
            data-type="ufo"
            data-id={id}
        />
    );
});