import React, {useCallback, useEffect, useRef} from 'react'
import {Container} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "store";
import {soundManager} from "lib/soundManager";
import {getBrowser} from "lib/utils";

const browser = getBrowser()

export const TimeEater = React.memo(({ id, ...props }) => {
    const isPaused = useSelector(selectors.isPaused)
    const dispatch = useDispatch()

    const element = useRef()

    const timeDown = useCallback(() => {
        dispatch(actions.subtractTime(5000))
        dispatch(actions.removeElement(id))
        soundManager.playTimeDown()
    }, [])

    useEffect(() => {
        if (["Chrome", "Safari", "Opera"].includes(browser)) {
            element.current.addEventListener("webkitAnimationEnd", timeDown)
        }
        else {
            element.current.addEventListener("animationEnd", timeDown)
        }
    }, [])

    useEffect(() => {
        if (isPaused) {
            element.current.classList.add('stop')
        } else {
            element.current.classList.remove('play')
        }
    }, [isPaused])

    const handleClick = () => {
        dispatch(actions.addScore(2))
        dispatch(actions.removeElement(id))
    }

    return (
        <Container
            ref={element}
            onClick={handleClick}
            {...props}
        />
    )
})