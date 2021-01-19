import React from 'react';
import {GameField, GameUI, ResultsTable, Title, GameOverDialog, UserCard} from "components";
import {GameWindow, Sidebar} from "containers";

export function GamePage() {
    return (
        <div className="app">
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
        </div>
    );
}