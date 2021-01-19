import React, {useRef, useState} from 'react'
import {Container, Toggle} from "./styles";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import CloseIcon from '@material-ui/icons/Close';

export const Sidebar = ({children}) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    const toggle = () => {
        if (open) {
            ref.current.classList.remove('show')
            setOpen(!open)
        }
        else {
            ref.current.classList.add('show')
            setOpen(!open)
        }
    }

    return (
        <>
            <Toggle onClick={toggle}>
                {open ? <CloseIcon/> : <MenuOpenIcon/>}
            </Toggle>
            <Container ref={ref}>
                {children}
            </Container>
        </>

    )
}