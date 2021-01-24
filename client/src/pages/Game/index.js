import React, {useEffect} from 'react';
import { GameUI, GameField, ResultsTable, GameOverDialog } from "components/game";
import { Rules, Title } from "components/common";
import { UserCard } from "components/users";
import { GameWindow, Layout, Sidebar } from "containers";
import { useDispatch } from 'react-redux';
import { gameActions } from 'store/game';

export function GamePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => dispatch(gameActions.clearGame());
    }, [])

    return (
        <Layout>
            <GameWindow>
                <GameUI/>
                <GameField/>
            </GameWindow>
            <Sidebar>
                <Title/>
                <ResultsTable/>
                <UserCard/>
            </Sidebar>
            <GameOverDialog/>
            <Rules/>
        </Layout>
    );
}