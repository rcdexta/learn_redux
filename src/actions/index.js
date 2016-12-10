export function increment(counter) {
    return {
        type: 'INCREMENT',
        counter
    }
}

export function decrement(counter) {
    return {
        type: 'DECREMENT',
        counter
    }
}

export function reset(counter) {
    return {
        type: 'RESET',
        counter
    }
}