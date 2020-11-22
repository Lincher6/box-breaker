import React, {useCallback, useState} from 'react'
import {Container} from "./styles";
import {debounce, getEffectPosition, getIdGenerator} from "lib/utils";

const generateId = getIdGenerator()

export const Points = ({ amount, ...props }) => {
    return (
        <Container
            {...props}
        >
            +{amount}
        </Container>
    )
}

export const usePoints = () => {
    const [points, setPoints] = useState([])

    const clearPoints = useCallback(debounce(() => setPoints([]), 3000), [])

    const addPoints = (event, amount) => {
        clearPoints()

        const id = generateId()
        const {top, left} = getEffectPosition(event)
        setPoints(prevState => [
            ...prevState,
            <Points amount={amount} key={id} id={id} top={top} left={left}/>
        ])
    }

    return {points, addPoints}
}