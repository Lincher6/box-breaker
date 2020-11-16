import React, {useContext, useEffect, useRef, useState} from 'react'
import styled from "styled-components/macro";
import {useContextActions, useContextState} from "../context/Context";
import {SUB} from "../constants";

const Container = styled.div`
  font-family: DigitalClock;
  margin: 10px;
  padding: 5px 15px;
  min-width: 100px;
  background-color: ${() => SUB};
  border-radius: 4px;
  font-size: 32px;
  color: white;
  text-align: center;
  font-variant-numeric: lining-nums;
  
`

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