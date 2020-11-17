import {BOX_SIZE} from "./constants";

export const getIdGenerator = (prefix = "id-") => {
    let id = 0

    return () => {
        return `${prefix}${id++}`
    }
}

export const getOffset = size => {
    const rawOffset = Math.abs(Math.floor(Math.random() * size) - BOX_SIZE)
    return rawOffset - (rawOffset % BOX_SIZE)
}

export const checkPosition = (positions, {top,left}) => {
    return positions.some(position => position.top === top && position.left === left)
}

export const debounce = (fn, delay) => {
    let timer

    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

export const storage = (result) => {
    if (result) {
        localStorage.setItem('results', JSON.stringify(result))
    } else {
        const data = JSON.parse(localStorage.getItem('results'))
        return data ? data : []
    }
}

export const sortResults = (results) => {
    return results.sort((a, b) => a.score < b.score)
}
