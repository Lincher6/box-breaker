import {BOX_SIZE} from "./constants";

export const wait = delay => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('finished');
        }, [delay * 1000])
    })
}

export const createError = error => {
    return {
        error: {
            type: error.message,
            message: error.response?.data?.message || 'unknown error'
        }
    }
}

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

export const debounce = (fn, delay) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
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

export const random = maxValue => {
    return Math.floor(Math.random() * maxValue);
}