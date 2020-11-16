import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components/macro'
import {Box} from "./Box";
import {BOX_SIZE, SUB} from "../constants";
import {getIdGenerator} from "../utils";
import {useContextActions, useContextState} from "../context/Context";
import {useFlashes} from "./Flash";

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-grow: 1;
  border: 1px solid ${() => SUB};
  cursor: crosshair;
  overflow: hidden;
  border-radius: 5px;
  pointer-events: ${({active}) => active ? 'auto' : 'none'};
  background-color: #0e1621;
`
const nextId = getIdGenerator()

export const GameField = () => {
    const {boxes, isPaused, gameStatus } = useContextState()
    const {addScore, addBox, removeBox} = useContextActions()
    const {flashes, addFlash, missTarget} = useFlashes()

    const fieldRef = useRef(null)
    const height = useRef(0)
    const width = useRef(0)
    const timer = useRef()

    const handleShot = event => {
        const {type, id} = event.target.dataset
        if (type === "box") {
            addScore(1)
            removeBox(id)
            createBoxes(Math.floor(Math.random() * 4))
            const rect = event.currentTarget.getBoundingClientRect()
            const top = event.clientY - rect.top
            const left = event.clientX - rect.left
            addFlash(top, left)
        } else {
            missTarget()
        }
    }

    const createBoxes = (amount) => {
        for (let i = 0; i < amount; i++) {
            const top = Math.abs(Math.floor(Math.random() * height.current) - BOX_SIZE)
            const left = Math.abs(Math.floor(Math.random() * width.current) - BOX_SIZE)
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
            {flashes}
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