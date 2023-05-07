export function useDebounce (fn, delay = 500) {
    let timeoutId
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}
