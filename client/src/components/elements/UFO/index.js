import React, {useEffect, useRef} from 'react'
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { gameSelectors, gameActions } from 'store/game';
import ufoImg from 'assets/UFO.png';

export const UFO = React.memo(({id, ...props}) => {
    const isPaused = useSelector(gameSelectors.isPaused);
    const dispatch = useDispatch();

    const element = useRef();

    const handleRemove = () => {
        dispatch(gameActions.removeElement(id));
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
            data-type='ufo'
            data-id={id}
        />
    );
});