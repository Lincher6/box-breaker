import React, {useEffect, useRef} from 'react'
import {Container} from "./styles";
import {useContextActions, useContextState} from "context/Context";

export const Timer = () => {
    const {time, isPaused} = useContextState()
    const {countDown} = useContextActions()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    const timer = useRef()

    useEffect(() => {
        if (isPaused) {
            clearInterval(timer.current)
        } else {
            timer.current = setInterval(() => {
                countDown()
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