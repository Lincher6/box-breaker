import React from 'react'
import styled from "styled-components/macro";

const Container = styled.div`
  padding: 5px 15px;
  background-color: darkcyan;
  border-radius: 4px;
  font-family: DigitalClock;
  font-size: 32px;
  color: white;
  text-align: center;
  
`

export const Timer = () => {
    return (
        <Container>
            00:00
        </Container>
    )
}