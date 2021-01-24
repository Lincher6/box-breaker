import {SET_LOADING, SET_INITIALIZE, SET_ERROR} from "./types";


const initialState = {
    initialized: false,
    loading: false,
    error: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }

        case SET_INITIALIZE: {
            return {
                ...state,
                user: action.payload
            }
        }

        case SET_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }

        default: return state;
    }
}