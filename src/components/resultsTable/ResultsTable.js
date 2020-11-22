import React from 'react'
import {Container, Title, Record, SubText, Name, Score} from "./styles";
import {useSelector} from "react-redux";
import {selectors} from "store";


export const ResultsTable = () => {
    const results = useSelector(selectors.results)

    return (
        <Container>
            <Title>HI-SCORE</Title>
            {
                results.length === 0
                    ? <SubText>No results</SubText>
                    : results.map((user, index) => (
                        <Record key={index}>
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