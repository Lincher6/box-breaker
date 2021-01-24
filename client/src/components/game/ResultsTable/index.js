import React, {useEffect, useState} from 'react';
import {Container, Title, Record, SubText, Name, Score, Table} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions, gameSelectors } from 'store/game';
import CircularProgress from '@material-ui/core/CircularProgress';
import { wait } from 'lib/utils';
import {usersSelectors} from 'store/users';


export const ResultsTable = () => {
    const [loading, setLoading] = useState(false);
    const results = useSelector(gameSelectors.results) || [];
    const { name } = useSelector(usersSelectors.user);
    const dispatch = useDispatch();

    useEffect(async () => {
        setLoading(true);
        await Promise.all([ wait(1), dispatch(gameActions.getResults()) ]);
        setLoading(false);

        return () => dispatch(gameActions.setResults([]));
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
            <Table>
                {
                    results.length === 0
                        ? <SubText>No results</SubText>
                        : results.map((user, index) => (
                            <Record key={index} active={user.name === name}>
                                <Name>
                                    {user.name}
                                </Name>
                                <Score>
                                    {user.score}
                                </Score>
                            </Record>
                        ))
                }
            </Table>
        </Container>
    )
};