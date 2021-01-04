import {soundManager} from "lib/soundManager";

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

export const checkHitBox = type => {
    switch (type) {
        case 'boxes': return {elementsToCreate: Math.floor(Math.random() * 5), points: 1};
        case 'timeEaters': return {elementsToCreate: 2, points: 2};
        case 'armor-0': return {elementsToCreate: 4, points: 5};
        case 'ufo': return {elementsToCreate: 1, points: 10};
        default: soundManager.playMiss();
    }
}

export const checkPosition = (positions, {top,left}) => {
    return positions.some(position => position.top === top && position.left === left);
}