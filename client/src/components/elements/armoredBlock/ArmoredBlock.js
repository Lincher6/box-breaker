import React, {useRef, useState} from 'react'
import {Container} from "./styles";
import {soundManager} from "lib/soundManager";
import {INITIAL_ARMOR, ARMOR_SIZE} from "lib/constants";

export const ArmoredBlock = React.memo(({id, ...props}) => {
    const [hp, setHp] = useState(INITIAL_ARMOR);

    const element = useRef();

    const handleClick = () => {
        if (hp > 0) {
            const newHp = hp - 1;
            soundManager.playArmorHit();
            setHp(newHp);
            const offset = (INITIAL_ARMOR - newHp) * ARMOR_SIZE;
            element.current.style.transform = `translate(${offset}px, ${offset}px)`;
        }
    };

    return (
        <Container
            ref={element}
            hp={hp}
            {...props}
            onClick={handleClick}
            data-type={hp === 0 ? 'ArmoredBox' : ''}
            data-id={id}
        />
    );
});