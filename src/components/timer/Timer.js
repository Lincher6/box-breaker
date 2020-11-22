import React, {useEffect, useRef} from 'react'
import {Container} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "store";

export const Timer = () => {
    const time = useSelector(selectors.time)
    const isPaused = useSelector(selectors.isPaused)
    const dispatch = useDispatch()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    const timer = useRef()

    useEffect(() => {
        if (isPaused) {
            clearInterval(timer.current)
        } else {
            timer.current = setInterval(() => {
                dispatch(actions.countdown())
            }, 1000)
        }
    }, [isPaused])

    return (
        <Container>
            {minutes < 10 ? `0${minutes}` : minutes}
            :
            {seconds < 10 ? `0${seconds}` : seconds}
        </Container>
    )
}