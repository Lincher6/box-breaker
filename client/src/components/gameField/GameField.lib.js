import {soundManager} from "lib/soundManager";
import {ArmoredBlock, Box, TimeEater, Ufo} from "components";

export const getComponent = () => {
    const selector = Math.floor(Math.random() * 25);
    if (selector < 1) {
        return {Component: Ufo, elementsToCreate: 1, points: 10};
    } else if (selector < 4) {
        return {Component: TimeEater, elementsToCreate: 2, points: 2};
    } else if (selector < 7) {
        return {Component: ArmoredBlock, elementsToCreate: 4, points: 5};
    }
    return {Component: Box, elementsToCreate: Math.floor(Math.random() * 5), points: 1};
};

export function flash({ event, $field }) {
    const $flash = document.createElement('div');
    $flash.style.top = event.clientY - 25 + "px";
    $flash.style.left = event.clientX - 25 + "px";
    $flash.classList.add("flash");
    $field.appendChild($flash);
    soundManager.playShoot();

    setTimeout(() => {
        $field.removeChild($flash);
    }, 1000);
}

export const checkPosition = (positions, {top,left}) => {
    return positions.some(position => position.top === top && position.left === left);
}