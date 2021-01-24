import React, {useRef, useState} from 'react'
import { Container, Toggle } from "./styles";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import CloseIcon from '@material-ui/icons/Close';

export const Sidebar = ({children}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    const toggle = () => {
        ref.current.classList.toggle('show');
        setOpen(!open);
    }

    return (
        <>
            <Toggle onClick={toggle}>
                {
                    open ? <CloseIcon/> : <MenuOpenIcon/>
                }
            </Toggle>
            <Container ref={ref}>
                { children }
            </Container>
        </>

    )
};