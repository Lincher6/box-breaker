import {
    ADD_ELEMENT,
    ADD_SCORE,
    CLOSE_DIALOG,
    COUNTDOWN,
    PAUSE_GAME,
    REMOVE_ELEMENT,
    START_GAME,
    SUBMIT_DIALOG,
    SUBTRACT_TIME
} from "./types";

export const addElement = element => ({
    type: ADD_ELEMENT,
    payload: element
})


export const addScore = score => ({
    type: ADD_SCORE,
    payload: score
})

export const removeElement = id => ({
    type: REMOVE_ELEMENT,
    payload: id
})

export const startGame = () => ({
    type: START_GAME
})

export const pauseGame = () => ({
    type: PAUSE_GAME
})

export const countdown = () => ({
    type: COUNTDOWN
})

export const closeDialog = () => ({
    type: CLOSE_DIALOG
})

export const submitDialog = newRecord => ({
    type: SUBMIT_DIALOG,
    payload: newRecord
})

export const subtractTime = amount => ({
    type: SUBTRACT_TIME,
    payload: amount
})