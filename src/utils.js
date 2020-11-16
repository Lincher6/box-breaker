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

export const storage = (result) => {
    if (result) {
        localStorage.setItem('results', JSON.stringify(result))
    } else {
        const data = JSON.parse(localStorage.getItem('results'))
        return data ? data : []
    }
}

export const sortResults = (results) => {
    console.log(results)
    const NEW = results.sort((a, b) => b.score - a.score)
    console.log(NEW)

    return results.sort((a, b) => a.score < b.score)
}
