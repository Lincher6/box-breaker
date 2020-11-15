import React, {useCallback, useState} from 'react'
import styled from 'styled-components/macro'
import {debounce, getIdGenerator} from "../utils";
import shootSound from '../assets/shot.wav'
import missSound from '../assets/miss.ogg'

const Container = styled.div`
  position: absolute;
  top: ${({ top }) => (top - 27) + 'px'};
  left: ${({ left }) => (left - 27) + 'px'};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid white;
  opacity: 0;
  pointer-events: none;
  animation: shot .6s;
  
  @keyframes shot {
    0% {transform: scale(0, 0); opacity: 1}
    100%{transform: scale(1, 1); opacity: 0}
  }
`
const generateId = getIdGenerator()
const shoot = new Audio(shootSound)
const miss = new Audio(missSound)
shoot.volume = .3

export const Flash = (props) => {
    return (
        <Container { ...props }/>
    )
}

export const useFlashes = () => {
    const [ flashes, setFlashes ] = useState([])

    const clearFlashes = useCallback(debounce(() => setFlashes([]), 600), [])

    const addFlash = (top, left) => {
        clearFlashes()
        shoot.currentTime = 0
        shoot.play()

        const id = generateId()
        setFlashes(prevState => [ ...prevState, <Flash key={id} id={id} top={top} left={left}/> ])
    }

    const missTarget = () => {
        miss.currentTime = 0
        miss.play()
    }

    return { flashes, addFlash, missTarget }
}