import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  top: ${({ top }) => top + 'px'};
  left: ${({ left }) => left + 'px'};
  background: white;
  animation: popUp .5s;
  
  @keyframes popUp {
    0% {transform: scale(0, 0)}
    50% {transform: scale(1.1, 1.1)}
    100% {transform: scale(1, 1)}
  }
`

export const Box = ({ children, ...props }) => {

    return (
        <Container
            { ...props }
        >
            { children }
        </Container>
    )
}