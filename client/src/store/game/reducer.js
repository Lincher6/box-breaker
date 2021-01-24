import {MINUTE} from "lib/constants";
import {
    ADD_ELEMENT,
    ADD_SCORE, CLEAR_GAME,
    CLOSE_DIALOG,
    COUNTDOWN,
    PAUSE_GAME, REMOVE_ELEMENT,
    SET_FIELD,
    SET_RESULTS,
    SET_TIME,
    START_GAME,
    SUBTRACT_TIME
} from "./types";

const initialState = {
    $field: null,
    score: 0,
    results: [],
    elements: [],
    time: new Date(MINUTE),
    gameStatus: {active: false},
    isGameOver: false,
    isPaused: true
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ELEMENT: {
            return {
                ...state,
                elements: [...state.elements, action.payload]
            };
        }

        case ADD_SCORE: return {
            ...state,
            score: state.score + action.payload
        };

        case REMOVE_ELEMENT: {
            return {
                ...state,
                elements: state.elements.filter(box => box.id !== action.payload)
            };
        }

        case START_GAME: return {
            ...state,
            score: 0,
            elements: [],
            time: new Date(MINUTE),
            gameStatus: {active: true},
            isPaused: false,
            isGameOver: false
        };

        case PAUSE_GAME: return {
            ...state,
            isPaused: !state.isPaused
        };

        case COUNTDOWN: {
            if (state.time > 0) {
                return {
                    ...state,
                    time: new Date(state.time - 1000)
                };
            }
            return {
                ...state,
                gameStatus: {active: false},
                isGameOver: true,
                isPaused: true
            };
        }

        case CLOSE_DIALOG: return {
            ...state,
            isGameOver: false,
        };

        case SUBTRACT_TIME: {
            const amount = state.time - action.payload
            return {
                ...state,
                time: new Date(amount > 0 ? amount : 0)
            };
        }

        case SET_TIME: {
            return {
                ...state,
                time: action.payload
            };
        }

        case SET_FIELD: {
            return { ...state, $field: action.payload};
        }

        case SET_RESULTS: {
            return {
                ...state,
                results: action.payload,
            };
        }

        case CLEAR_GAME: {
            return initialState;
        }

        default: return state;
    }
}