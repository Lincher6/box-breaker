import React, {useEffect} from 'react';
import {Container, Title, Record, SubText, Name, Score} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "store";


export const ResultsTable = () => {
    const results = useSelector(selectors.results) || [];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getResults());
    }, [])

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
};