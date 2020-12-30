import React, {useEffect} from 'react'
import {Container, Controls, Info} from "./styles";
import Button from "@material-ui/core/Button";
import {Timer, Score} from "components";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "store";

export const GameUI = () => {
    const { active } = useSelector(selectors.gameStatus)
    const isPaused = useSelector(selectors.isPaused)
    const dispatch = useDispatch()

    const handleStart = () => {
        dispatch(actions.startGame())
    }
    const handlePause = () => {
        dispatch(actions.pauseGame())
    }

    const handleKeyDown = event => {
        if (event.code === 'Space' && active) {
            event.preventDefault()
            dispatch(actions.pauseGame())
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [active])

    return (
        <Container>
            <Controls>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handlePause}
                    disabled={!active}
                >
                    {isPaused ? "RESUME" : "PAUSE"}
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleStart}
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