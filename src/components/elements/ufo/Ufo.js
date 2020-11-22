import React, {useEffect, useRef} from 'react'
import {Container} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "store";
import {removeElement} from "store/actions";
import {getBrowser} from "lib/utils";

const browser = getBrowser()

export const Ufo = React.memo(({id, ...props}) => {
    const isPaused = useSelector(selectors.isPaused)
    const dispatch = useDispatch()

    const element = useRef()

    const handleClick = () => {
        dispatch(actions.addScore(10))
        dispatch(removeElement(id))
    }

    const handleRemove = () => {
        dispatch(removeElement(id))
    }

    useEffect(() => {
        if (["Chrome", "Safari", "Opera"].includes(browser)) {
            element.current.addEventListener("webkitAnimationEnd", handleRemove)
        }
        else {
            element.current.addEventListener("animationEnd", handleRemove)
        }
    }, [])

    useEffect(() => {
        if (isPaused) {
            element.current.classList.add('stop')
        } else {
            element.current.classList.remove('stop')
        }
    }, [isPaused])

    return (
        <Container
            ref={element}
            {...props}
            onClick={handleClick}
            data-type="ufo"
        />
    )
})