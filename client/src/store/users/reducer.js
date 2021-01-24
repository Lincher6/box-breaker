import {CLEAR_USERS, SET_PAGE, SET_SEARCH, SET_SORT, SET_USER, SET_USERS, UPDATE_USER} from "./types";

const initialState = {
    user: {},
    users: [],
    page: 1,
    pageSize: 5,
    totalUserCount: 1,
    search: '',
    sortParams: { hiScore: 1 }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.payload.users,
                totalUserCount: action.payload.totalUserCount
            }
        }


        case UPDATE_USER: {
            return {
                ...state,
                user: { ...state.user, ...action.payload }
            }
        }

        case SET_PAGE: {
            return {
                ...state,
                page: action.payload
            }
        }

        case SET_SEARCH: {
            return {
                ...state,
                page: 1,
                search: action.payload
            }
        }

        case SET_SORT: {
            return {
                ...state,
                page: 1,
                sortParams: action.payload
            }
        }

        case CLEAR_USERS: {
            return {
                ...state,
                users: [],
                page: 1,
                pageSize: 5,
                totalUserCount: 1,
                search: '',
                sortParams: { hiScore: 1 }
            }
        }

        default: return state;
    }
}