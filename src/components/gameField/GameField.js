import React, {useEffect, useRef} from 'react'
import {Container} from "./styles";
import {checkPosition, getElement, getIdGenerator, getOffset} from "lib/utils";
import {useHits} from "../hit/Hit";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "../../store";
import {usePoints} from "../points/Points";
import {soundManager} from "lib/soundManager";

const nextId = getIdGenerator()

export const GameField = () => {
    const elements = useSelector(selectors.elements)
    const isPaused = useSelector(selectors.isPaused)
    const gameStatus = useSelector(selectors.gameStatus)
    const dispatch = useDispatch()

    const {hits, addHit} = useHits()
    const {points, addPoints} = usePoints()

    const fieldRef = useRef(null)
    const height = useRef(0)
    const width = useRef(0)
    const timer = useRef()
    const positions = useRef([])

    const handleShot = event => {
        const {type} = event.target.dataset
        if (type === "boxes") {
            createElements(Math.floor(Math.random() * 5))
            addHit(event)
            addPoints(event, 1)
        } else if (type === "timeEaters") {
            createElements(2)
            addHit(event)
            addPoints(event, 2)
        } else {
            soundManager.playMiss()
        }
    }

    const createElements = (amount) => {
        for (let i = 0; i < amount; i++) {
            const top = getOffset(height.current)
            const left = getOffset(width.current)
            if (checkPosition(positions.current, {top, left})) {
                i--
                continue
            }
            positions.current.push({top, left})
            dispatch(actions.addElement({
                id: nextId(),
                ...getElement(),
                top,
                left
            }))
        }
    }

    useEffect(() => {
        const field = fieldRef.current
        const rect = field.getBoundingClientRect()
        height.current = rect.bottom - rect.top
        width.current = rect.right - rect.left
    }, [])

    useEffect(() => {
        if (isPaused) {
            clearTimeout(timer.current)
        } else {
            timer.current = setInterval(() => {
                createElements(1)
            }, 3000)
        }
    }, [isPaused])

    useEffect(() => {
        if (gameStatus.active) {
            createElements(4)
        } else {
            clearTimeout(timer.current)
        }
    }, [gameStatus])

    return (
        <Container
            ref={fieldRef}
            onClick={handleShot}
            active={gameStatus.active && !isPaused}
            isPaused={isPaused && gameStatus.active}
        >
            {points}
            {hits}
            {elements.map(({Component, ...data}) => {
                return (
                    <Component
                        key={data.id}
                        id={data.id}
                        top={data.top}
                        left={data.left}
                        data-type={data.type}
                    />
                )
            })}
        </Container>
    )
}