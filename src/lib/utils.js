import {BOX_SIZE} from "./constants";
import {TimeEater, Box} from "components";
import {actions} from "../store";

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

export const getElement = () => {
    const selector = Math.floor(Math.random() * 8)
    switch (selector) {
        case 0: return {Component: TimeEater, type: "timeEaters"}
        default: return {Component: Box, type: "boxes"}
    }

}

export const checkPosition = (positions, {top,left}) => {
    return positions.some(position => position.top === top && position.left === left)
}

export const getEffectPosition = event => {
    const target= event.target.getBoundingClientRect()
    const field = event.currentTarget.getBoundingClientRect()
    const top = target.top - field.top + (target.width / 2)
    const left = target.left - field.left + (target.width / 2)

    return {top, left}
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
    return results.sort((a, b) => b.score - a.score)
}

export const getBrowser = () => {
    const sUsrAg = navigator.userAgent;
    let browser

    if (sUsrAg.indexOf("Firefox") > -1) {
        browser = "Firefox";
    } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
        browser = "SamsungBrowser";
    } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
        browser = "Opera";
    } else if (sUsrAg.indexOf("Trident") > -1) {
        browser = "Trident";
    } else if (sUsrAg.indexOf("Edge") > -1) {
        browser = "Edge";
    } else if (sUsrAg.indexOf("Chrome") > -1) {
        browser = "Chrome";
    } else if (sUsrAg.indexOf("Safari") > -1) {
        browser = "Safari";
    } else {
        browser = "unknown";
    }

    return browser
}
