import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components/macro'
import {Box} from "./Box";
import {BOX_SIZE} from "../constants";
import {getIdGenerator} from "../utils";
import {useContextActions, useContextState} from "../context/Context";
import {useFlashes} from "./Flash";

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-grow: 1;
  background-color: #182533;
  border-radius: 10px;
  border: 2px solid darkcyan;
  cursor: crosshair;
  overflow: hidden;
`
const nextId = getIdGenerator()

export const GameField = () => {
    const { boxes, isPaused, isStarted } = useContextState()
    const { addScore, addBox, removeBox } = useContextActions()
    const { flashes, addFlash } = useFlashes()

    const fieldRef = useRef(null)
    const height = useRef(0)
    const width = useRef(0)
    const timer = useRef()

    const handleShot = event => {
        const rect = event.target.getBoundingClientRect()
        const top = event.clientY - rect.top
        const left = event.clientX - rect.left
        addFlash(top, left)
    }

    const handleHitBox = (id) => {
        addScore(1)
        removeBox(id)
        createBoxes(Math.floor(Math.random() * 4))
    }

    const createBoxes = (amount) => {
        for (let i = 0; i < amount; i++) {
            const top = Math.abs(Math.floor(Math.random() * height.current) - BOX_SIZE)
            const left = Math.abs(Math.floor(Math.random() * width.current) - BOX_SIZE)
            addBox({ id: nextId(), top, left })
        }
    }

    useEffect(() => {
        const field = fieldRef.current
        const rect = field.getBoundingClientRect()
        height.current = rect.bottom - rect.top
        width.current = rect.right - rect.left
    }, [])

    useEffect(() => {
        if (isStarted) {
            const fieldStyle = fieldRef.current.style
            if (isPaused) {
                clearTimeout(timer.current)
                fieldStyle.pointerEvents = `none`
            } else {
                timer.current = setInterval(() => {
                    createBoxes(1)
                }, 1000)
                fieldStyle.pointerEvents = `auto`
            }
        }
    }, [isPaused, isStarted])

    return (
        <Container ref={fieldRef} onClick={handleShot}>
            {flashes}
            {boxes.map(box => {
                return (
                    <Box
                        key={box.id}
                        top={box.top}
                        left={box.left}
                        onClick={() => handleHitBox(box.id)}
                    />
                )
            })}
        </Container>
    )
}