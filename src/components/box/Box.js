import React from 'react'
import { Container } from "./styles";
import {useDispatch} from "react-redux";
import {removeElement} from "../../store/actions";
import {actions} from "../../store";

export const Box = React.memo(({id, ...props}) => {
    const dispatch = useDispatch()

    console.log(id)

    const handleClick = () => {
        dispatch(actions.addScore(1))
        dispatch(removeElement(id))
    }

    return (
        <Container
            { ...props }
            onClick={handleClick}
        />
    )
})