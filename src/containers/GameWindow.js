import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  padding: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const GameWindow = ({ children }) => {
    return (
        <Container>{ children }</Container>
    )
}