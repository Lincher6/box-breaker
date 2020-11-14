import React from 'react'
import styled from 'styled-components/macro'
import logo from '../assets/logo.png'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100%;
  width: 300px;
`

const Logo = styled.img`
  width: 160px;
  height: 160px;
  object-fit: contain;
`

export const Title = (props) => {
    return (
        <Container>
            <Logo src={logo} alt=""/>
        </Container>
    )
}