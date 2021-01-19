import {
    SET_USER,
    ADD_ELEMENT,
    ADD_SCORE,
    CLOSE_DIALOG,
    COUNTDOWN,
    PAUSE_GAME,
    REMOVE_ELEMENT, SET_FIELD, SET_RESULTS, SET_TIME,
    START_GAME,
    SUBTRACT_TIME, UPDATE_USER, SET_LOADING
} from "./types";
import Cookies from "js-cookie";
import {actions} from "./index";

export const setLoading = loading => ({
    type: SET_LOADING,
    payload: loading
});

export const initializeApp = userId => async dispatch => {
    if (userId) {
        dispatch(setLoading(true));
        await dispatch(actions.getUser());
        dispatch(setLoading(false));
    }
};

export const setUser = user => ({
    type: SET_USER,
    payload: user
});

export const updateUser = user => ({
    type: UPDATE_USER,
    payload: user
});

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

export const submitDialog = record => async (dispatch) => {
    await fetch('/results', {
        method: 'POST',
        body: JSON.stringify(record),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (record.newHiScore) {
        dispatch(updateUser({ hiScore: record.newHiScore }))
    }
    dispatch(getResults());

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

export const getUser = () => async dispatch => {
    const response = await fetch('/user');
    const user = await response.json();
    dispatch(setUser(user));
}

export const getResults = () => async dispatch => {
    const response = await fetch('/results');
    const results = await response.json();
    dispatch(setResults(results));
};

export const logout = history => async (dispatch) => {
    const response = await fetch('/logout', {
        method: 'POST'
    });

    if (response.ok) {
        dispatch(actions.setUser({}));
    }
    history.push('/login');
}
