let init = {
    counter: 1
}

export default function reducer(state = init, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {counter: state.counter + 1}
        case 'DECREMENT':
            return {counter: state.counter - 1}
        case 'RESET':
            return init
        default:
            return state
    }
}