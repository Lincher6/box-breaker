
export const getIdGenerator = (prefix = "id-") => {
    let id = 0

    return () => {
        return `${prefix}${id++}`
    }
}