import React, {useEffect, useRef} from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-grow: 1;
  background-color: #182533;
  border-radius: 10px;
  border: 2px solid darkcyan;
  cursor: crosshair;
`

const Field = styled.div`
    flex-grow: 1;
`

export const GameField = () => {

    const fieldRef = useRef(null)
    let rect = useRef({})
    let height = useRef(0)
    let width = useRef(0)

    useEffect(() => {
        const field = fieldRef.current
        rect = field.getBoundingClientRect()
        height = rect.bottom - rect.top
        width = rect.right - rect.left
    }, [])

    return (
        <Container ref={fieldRef}>

        </Container>
    )
}