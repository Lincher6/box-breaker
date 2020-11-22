import {sortResults, storage} from "lib/utils";
import {MINUTE} from "lib/constants";
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

const initialState = {
    score: 0,
    results: storage(),
    elements: [],
    time: new Date(MINUTE),
    gameStatus: {active: false},
    isGameOver: false,
    isPaused: true
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ELEMENT: {
            return {
                ...state,
                elements: [...state.elements, action.payload]
            }
        }

        case ADD_SCORE: return {
            ...state,
            score: state.score + action.payload
        }

        case REMOVE_ELEMENT: {
            return {
                ...state,
                elements: state.elements.filter(box => box.id !== action.payload)
            }
        }

        case START_GAME: return {
            ...state,
            score: 0,
            elements: [],
            time: new Date(MINUTE),
            gameStatus: {active: true},
            isPaused: false,
            isGameOver: false
        }

        case PAUSE_GAME: return {
            ...state,
            isPaused: !state.isPaused
        }

        case COUNTDOWN: {
            if (state.time > 0) {
                return {
                    ...state,
                    time: new Date(state.time - 1000)
                }
            }
            return {
                ...state,
                gameStatus: {active: false},
                isGameOver: true,
                isPaused: true
            }
        }

        case CLOSE_DIALOG: return {
            ...state,
            isGameOver: false,
        }

        case SUBMIT_DIALOG: {
            const results = sortResults([ ...state.results, action.payload])
            storage(results)
            return {
                ...state,
                results
            }
        }

        case SUBTRACT_TIME: {
            const amount = state.time - action.payload
            return {
                ...state,
                time: new Date(amount > 0 ? amount : 0)
            }
        }

        default: return state
    }
}