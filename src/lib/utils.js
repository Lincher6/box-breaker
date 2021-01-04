import {BOX_SIZE} from "./constants";
import {TimeEater, Box, ArmoredBlock, Ufo} from "components";

export const getIdGenerator = (prefix = "id-") => {
    let id = 0;

    return () => {
        return `${prefix}${id++}`
    };
};

export const getOffset = size => {
    const rawOffset = Math.abs(Math.floor(Math.random() * size) - BOX_SIZE);
    return rawOffset - (rawOffset % BOX_SIZE);
};

export const getComponent = () => {
    const selector = Math.floor(Math.random() * 25);
    if (selector < 1) {
        return Ufo;
    } else if (selector < 4) {
        return TimeEater;
    } else if (selector < 7) {
        return ArmoredBlock;
    }
    return Box;
};

export const debounce = (fn, delay) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

export const storage = (result) => {
    if (result) {
        localStorage.setItem('results', JSON.stringify(result));
    } else {
        const data = JSON.parse(localStorage.getItem('results'));
        return data ? data : [];
    }
};

export const sortResults = (results) => {
    return results.sort((a, b) => b.score - a.score);
};

export const showPopUp = ({ event, $field, text, color = 'red' }) => {
    const $target = event.target;
    const $popUp = document.createElement('div');
    $popUp.style.top = $target.offsetTop + "px";
    $popUp.style.left = $target.offsetLeft + ($target.offsetWidth / 2)+ "px";
    $popUp.style.color = color;
    $popUp.classList.add("popUp");
    $popUp.innerText = text;
    $field.appendChild($popUp);

    setTimeout(() => {
        $field.removeChild($popUp);
    }, 3000);
};