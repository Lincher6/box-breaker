import React, {useCallback, useState} from 'react'
import {Container} from "./styles";
import {debounce, getIdGenerator} from "lib/utils";
import shootSound from 'assets/shot.wav'
import missSound from 'assets/miss.ogg'

const generateId = getIdGenerator()
const shoot = new Audio(shootSound)
const miss = new Audio(missSound)
shoot.preload = 'auto'
shoot.volume = .3

export const Hit = (props) => {
    return (
        <Container {...props}/>
    )
}

export const useHits = () => {
    const [hits, setHits] = useState([])

    const clearFlashes = useCallback(debounce(() => setHits([]), 600), [])

    const addHit = (event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const top = event.clientY - rect.top
        const left = event.clientX - rect.left

        clearFlashes()
        shoot.currentTime = 0
        shoot.play()

        const id = generateId()
        setHits(prevState => [
            ...prevState,
            <Hit key={id} id={id} top={top} left={left}/>
        ])
    }

    const missTarget = () => {
        miss.currentTime = 0
        miss.play()
    }

    return {hits, addHit, missTarget}
}