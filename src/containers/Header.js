import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 150px;
  width: 100%;
  margin-bottom: 10px;
`

export const Header = ({ children }) => {
    return (
        <Container>{ children }</Container>
    )
}