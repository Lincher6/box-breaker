import React, {useRef, useState} from 'react'
import {Container, Toggle} from "./styles";

export const Sidebar = ({children}) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    const toggle = () => {
        if (open) {
            ref.current.style.right = -1000 + 'px'
            setOpen(!open)
        }
        else {
            ref.current.style.right = 0
            setOpen(!open)
        }
    }

    return (
        <>
            <Toggle onClick={toggle}>
                {open ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </Toggle>
            <Container ref={ref}>
                {children}
            </Container>
        </>

    )
}