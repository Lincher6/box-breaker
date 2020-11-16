import React from 'react'
import styled from 'styled-components/macro'
import logo from '../assets/logo.png'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 300px;
`

const Logo = styled.img`
  width: 160px;
  height: 160px;
  object-fit: contain;
  cursor: pointer;
`

export const Title = (props) => {
    return (
        <Container>
            <a href="https://github.com/Lincher6/box-breaker" target="_blank" rel="noreferrer">
                <Logo src={logo} alt=""/>
            </a>
        </Container>
    )
}