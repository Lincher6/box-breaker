import React, {useState} from 'react'
import styled from 'styled-components/macro'
import {getIdGenerator} from "../utils";

const Container = styled.div`
  position: absolute;
  top: ${({ top }) => (top - 27) + 'px'};
  left: ${({ left }) => (left - 27) + 'px'};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid white;
  opacity: 0;
  animation: shot .6s;
  
  @keyframes shot {
    0% {transform: scale(0, 0); opacity: 1}
    100%{transform: scale(1, 1); opacity: 0}
  }
`
const generateId = getIdGenerator()

export const Flash = (props) => {
    return (
        <Container { ...props }/>
    )
}

export const useFlashes = () => {
    const [ flashes, setFlashes ] = useState([])

    const addFlash = (top, left) => {
        const id = generateId()
        setFlashes(prevState => [ ...prevState, <Flash key={id} id={id} top={top} left={left}/> ])
        setTimeout(() => {
            setFlashes(prevState => prevState.filter(flash => flash.id !== id))
            setFlashes(prevState => console.log(prevState))
        }, 1000)
        console.log(flashes)
    }

    return { flashes, addFlash }
}