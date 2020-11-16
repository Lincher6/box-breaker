import React, {useContext} from "react";
import {createContext, useState} from 'react'
import {sortResults, storage} from "../utils";
import {MINUTE} from "../constants";

const Context = createContext()

export const ContextProvider = ({children}) => {
    const [state, setState] = useState({
        score: 0,
        results: storage(),
        boxes: [],
        time: new Date(MINUTE),
        gameStatus: {active: false},
        isGameOver: false,
        isPaused: true
    })
    const actions = {
        addScore: amount => {
            setState(prevState => ({
                ...prevState,
                score: prevState.score + amount
            }))
        },
        addBox: (newBox) => {
            setState(prevState => ({
                ...prevState,
                boxes: [...prevState.boxes, newBox]
            }))
        },
        removeBox: (id) => {
            setState(prevState => ({
                ...prevState,
                boxes: prevState.boxes.filter(box => box.id !== id)
            }))
        },
        countDown: () => {
            setState(prevState => {
                if (prevState.time > 0) {
                    return {
                        ...prevState,
                        time: new Date(prevState.time - 1000)
                    }
                }
                return {
                    ...prevState,
                    gameStatus: {active: false},
                    isGameOver: true,
                    isPaused: true
                }
            })
        },
        startGame: () => {
            setState(prevState => ({
                ...prevState,
                score: 0,
                boxes: [],
                time: new Date(MINUTE),
                gameStatus: {active: true},
                isPaused: false,
                isGameOver: false
            }))
        },
        pauseGame: () => {
            setState(prevState => ({
                ...prevState,
                isPaused: !prevState.isPaused,
            }))
        },
        closeDialog: () => {
            setState(prevState => ({
                ...prevState,
                isGameOver: false,
            }))
        },
        submitDialog: (newRecord) => {
            setState(prevState => {
                const results = sortResults([ ...prevState.results, newRecord])
                storage(results)
                return {
                    ...prevState,
                    results
                }
            })
        }
    }

    return (
        <Context.Provider value={{state, actions}}>
            {children}
        </Context.Provider>
    )
}

export const useContextState = () => {
    return useContext(Context).state
}

export const useContextActions = () => {
    return useContext(Context).actions
}