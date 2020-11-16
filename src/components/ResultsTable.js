import React from 'react'
import styled from 'styled-components/macro'
import {PRIMARY, SECONDARY, SUB} from "../constants";
import {useContextState} from "../context/Context";

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 300px;
`

const Title = styled.h1`
  color: firebrick;
  font-family: DigitalClock;
  margin-bottom: 20px;
`

const SubText = styled.h3`
  opacity: .7;
`

const Record = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 10px;
  
  &:first-of-type {
    font-size: 1.2em;
    border-bottom: 1px solid ${() => SUB};
  }
`

const Name = styled.div`
  opacity: .8;
`

const Score = styled.div`
  color: ${() => SECONDARY};
`

export const ResultsTable = (props) => {
    const { results } = useContextState()

    return (
        <Container>
            <Title>HI-SCORE</Title>
            {
                results.length === 0
                    ? <SubText>No results</SubText>
                    : results.map(user => (
                        <Record key={user.name}>
                            <Name>
                                {user.name}
                            </Name>
                            <Score>
                                {user.score}
                            </Score>
                        </Record>
                    ))
            }
        </Container>
    )
}