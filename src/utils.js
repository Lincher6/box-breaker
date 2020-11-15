import React from "react";

export const getIdGenerator = (prefix = "id-") => {
    let id = 0

    return () => {
        return `${prefix}${id++}`
    }
}

export const debounce = (fn, delay) => {
    let timer

    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            console.log('here')
            fn(...args)
        }, delay)
    }
}
