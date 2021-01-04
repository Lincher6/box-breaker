import {
    ADD_ELEMENT,
    ADD_SCORE,
    CLOSE_DIALOG,
    COUNTDOWN,
    PAUSE_GAME,
    REMOVE_ELEMENT, SET_FIELD, SET_RESULTS, SET_TIME,
    START_GAME,
    SUBTRACT_TIME
} from "./types";

export const addElement = element => ({
    type: ADD_ELEMENT,
    payload: element
});


export const addScore = score => ({
    type: ADD_SCORE,
    payload: score
});

export const removeElement = id => ({
    type: REMOVE_ELEMENT,
    payload: id
});

export const startGame = () => ({
    type: START_GAME
});

export const pauseGame = () => ({
    type: PAUSE_GAME
});

export const countdown = () => ({
    type: COUNTDOWN
});

export const closeDialog = () => ({
    type: CLOSE_DIALOG
});

export const submitDialog = newRecord => async (dispatch, getState) => {
    const response = await fetch('/results', {
        method: 'POST',
        body: JSON.stringify({ results: [ ...getState().results, newRecord ] }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const { results } = await response.json();
    dispatch(setResults(results));

};

export const subtractTime = amount => ({
    type: SUBTRACT_TIME,
    payload: amount
});

export const setTime = time => ({
    type: SET_TIME,
    payload: time
});

export const setField = $field => ({
    type: SET_FIELD,
    payload: $field
});

export const setResults = results => ({
    type: SET_RESULTS,
    payload: results
});

export const getResults = () => async dispatch => {
    const response = await fetch('/results');
    const { results } = await response.json();
    dispatch(setResults(results));
};
