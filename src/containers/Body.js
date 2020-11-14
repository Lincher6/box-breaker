import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  margin-bottom: 10px;
`

export const Body = ({ children }) => {
    return (
        <Container>{ children }</Container>
    )
}