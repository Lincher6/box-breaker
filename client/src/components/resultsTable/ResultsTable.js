import React, {useEffect, useState} from 'react';
import {Container, Title, Record, SubText, Name, Score} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "store";
import CircularProgress from "@material-ui/core/CircularProgress";


export const ResultsTable = () => {
    const [ loading, setLoading ] = useState(false);
    const results = useSelector(selectors.results) || [];
    const dispatch = useDispatch();

    useEffect(async () => {
        setLoading(true);
        await dispatch(actions.getResults());
        setLoading(false);
    }, [])

    if (loading) {
        return (
            <Container>
                <Title>HI-SCORE</Title>
                <CircularProgress size={80}/>
            </Container>
        )
    }

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