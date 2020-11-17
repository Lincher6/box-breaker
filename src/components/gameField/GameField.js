import React, {useEffect, useRef} from 'react'
import {Container} from "./styles";
import {Box} from "components";
import {checkPosition, getIdGenerator, getOffset} from "lib/utils";
import {useContextActions, useContextState} from "context/Context";
import {useHits} from "../hit/Hit";

const nextId = getIdGenerator()

export const GameField = () => {
    const {boxes, isPaused, gameStatus } = useContextState()
    const {addScore, addBox, removeBox} = useContextActions()
    const {hits, addHit, missTarget} = useHits()

    const fieldRef = useRef(null)
    const height = useRef(0)
    const width = useRef(0)
    const timer = useRef()
    const positions = useRef([])

    const handleShot = event => {
        const {type, id} = event.target.dataset
        if (type === "box") {
            addScore(1)
            removeBox(id)
            createBoxes(Math.floor(Math.random() * 5))
            addHit(event)
        } else {
            missTarget()
        }
    }

    const createBoxes = (amount) => {
        for (let i = 0; i < amount; i++) {
            const top = getOffset(height.current)
            const left = getOffset(width.current)
            if (checkPosition(positions.current, {top, left})) {
                i--
                continue
            }
            positions.current.push({top, left})
            addBox({id: nextId(), top, left})
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
        }
        else {
            timer.current = setInterval(() => {
                createBoxes(1)
            }, 3000)
        }
    }, [isPaused])

    useEffect(() => {
        if (gameStatus.active) {
            createBoxes(4)
        }
        else {
            clearTimeout(timer.current)
        }
    }, [gameStatus])

    return (
        <Container
            ref={fieldRef}
            onClick={handleShot}
            active={gameStatus.active && !isPaused}
        >
            {hits}
            {boxes.map(box => {
                return (
                    <Box
                        key={box.id}
                        top={box.top}
                        left={box.left}
                        data-type="box"
                        data-id={box.id}
                    />
                )
            })}
        </Container>
    )
}