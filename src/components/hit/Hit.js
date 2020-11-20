import React, {useCallback, useState} from 'react'
import {Container} from "./styles";
import {debounce, getEffectPosition, getIdGenerator} from "lib/utils";
import {soundManager} from "lib/soundManager";
import {BOX_SIZE} from "../../lib/constants";

const generateId = getIdGenerator()

export const Hit = React.memo((props) => {
    return (
        <Container {...props}/>
    )
})

export const useHits = () => {
    const [hits, setHits] = useState([])

    const clearFlashes = useCallback(debounce(() => setHits([]), 600), [])

    const addHit = (event) => {
        clearFlashes()
        soundManager.playShoot()

        const id = generateId()
        const {top, left} = getEffectPosition(event)
        setHits(prevState => [
            ...prevState,
            <Hit key={id} id={id} top={top} left={left}/>
        ])
    }

    return {hits, addHit}
}