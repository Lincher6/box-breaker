import React from 'react'
import styled from 'styled-components/macro'
import Button from "@material-ui/core/Button";
import {Timer} from "./Timer";
import {Score} from "./Score";
import {useContextActions, useContextState} from "../context/Context";

const Container = styled.div`
  display: flex;
  padding: 10px;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`
const Controls = styled.div`
  display: flex;
  flex-wrap: nowrap;
`
export const GameUI = () => {
    const { gameStatus: { active }, isPaused } = useContextState()
    const { startGame, pauseGame } = useContextActions()

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

            <Timer/>
            <Score/>
        </Container>
    )
}