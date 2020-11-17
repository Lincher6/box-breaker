import React from 'react'
import {Container, Controls, Info} from "./styles";
import Button from "@material-ui/core/Button";
import {Timer, Score} from "components";
import {useContextActions, useContextState} from "context/Context";


export const GameUI = () => {
    const {gameStatus: {active}, isPaused} = useContextState()
    const {startGame, pauseGame} = useContextActions()

    return (
        <Container>
            <Controls>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={pauseGame}
                    disabled={!active}
                >
                    {isPaused ? "RESUME" : "PAUSE"}
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={startGame}
                >
                    {active ? "RESTART" : "NEW GAME"}
                </Button>
            </Controls>

            <Info>
                <Timer/>
                <Score/>
            </Info>
        </Container>
    )
}