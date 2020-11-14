import React from 'react'
import styled from "styled-components/macro";

const Container = styled.div`
  padding: 5px 15px;
  background-color: darkcyan;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-family: DigitalClock;
  font-size: 32px;
`

export const Score = () => {
    return (
        <Container>
            Score: 000
        </Container>
    )
}