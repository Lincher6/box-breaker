import {BOX_SIZE} from "./constants";
import {TimeEater, Box, ArmoredBlock, Ufo} from "components";
import {soundManager} from "./soundManager";

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

export const getComponent = () => {
    const selector = Math.floor(Math.random() * 25)
    if (selector < 1) {
        return Ufo
    } else if (selector < 4) {
        return TimeEater
    } else if (selector < 7) {
        return ArmoredBlock
    }
    return Box
}

export const checkPosition = (positions, {top,left}) => {
    return positions.some(position => position.top === top && position.left === left)
}

export const checkHitBox = type => {
    if (type === "boxes") {
        return {elementsToCreate: Math.floor(Math.random() * 5), points: 1}
    } else if (type === "timeEaters") {
        return {elementsToCreate: 2, points: 2}
    } else if (type && type.startsWith("armor")) {
        if (type === "armor-0") {
            return {elementsToCreate: 4, points: 5}
        }
    } else if (type === "ufo") {
        return {elementsToCreate: 1, points: 10}
    } else {
        soundManager.playMiss()
    }
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
