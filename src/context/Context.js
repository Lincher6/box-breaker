import React, {useContext} from "react";
import {createContext, useState} from 'react'

const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [ state, setState ] = useState({
        score: 0,
        boxes: [],
        isStarted: false,
        isPaused: false,
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
                boxes: [ ...prevState.boxes, newBox ]
            }))
        },
        removeBox: (id) => {
            setState(prevState => ({
                ...prevState,
                boxes: prevState.boxes.filter(box => box.id !== id)
            }))
        },
        startGame: () => {
            setState({
                ...state,
                score: 0,
                boxes: [],
                isStarted: true,
            })
        },
        pauseGame: () => {
            setState(prevState => ({
                ...prevState,
                isPaused: !prevState.isPaused
            }))
        },
    }

    return (
        <Context.Provider value={{ state, actions }}>
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