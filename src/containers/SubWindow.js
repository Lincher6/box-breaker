import React from 'react'
import styled from 'styled-components/macro'
import {SUB} from "../constants";

const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  width: 300px;
`

export const SubWindow = ({ children }) => {
    return (
        <Container>{ children }</Container>
    )
}