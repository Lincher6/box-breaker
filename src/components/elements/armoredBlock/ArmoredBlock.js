import React, {useRef, useState} from 'react'
import {Container} from "./styles";
import {actions} from "store";
import {useDispatch} from "react-redux";
import {soundManager} from "lib/soundManager";
import {INITIAL_ARMOR, ARMOR_SIZE} from "lib/constants";

export const ArmoredBlock = React.memo(({id, ...props}) => {
    const [hp, setHp] = useState(INITIAL_ARMOR)
    const dispatch = useDispatch()

    const element = useRef()

    const handleClick = () => {
        const newHp = hp - 1
        if (newHp < 0) {
            dispatch(actions.addScore(5))
            dispatch(actions.removeElement(id))
        } else {
            soundManager.playArmorHit()
            setHp(newHp)
            const offset = (INITIAL_ARMOR - newHp) * ARMOR_SIZE
            element.current.style.transform = `translate(${offset}px, ${offset}px)`
        }
    }

    return (
        <Container
            ref={element}
            hp={hp}
            {...props}
            onClick={handleClick}
            data-type={`armor-${hp}`}
        />
    )
})