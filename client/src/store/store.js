import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "./app";
import {gameReducer} from "./game";
import {usersReducer} from "./users";

const rootReducer = combineReducers({
    app: appReducer,
    game: gameReducer,
    users: usersReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));