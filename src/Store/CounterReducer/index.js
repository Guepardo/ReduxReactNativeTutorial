// CONSTANTS
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const SET_LOADING = 'SET_LOADING'

// ACTIONS

// -- Normal action 
export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function setLoading(status) {
    return {
        type: SET_LOADING, 
        status
    }
}

// -- Thunk action 

export function asyncIncrement(delay) {
    return dispatch => {
        dispatch(setLoading(true))
        setTimeout(() => {
            dispatch(increment())
            dispatch(setLoading(false))
        },delay);
    }
}

export function asyncDecrement(delay) {
    return dispatch => {
        dispatch(setLoading(true))
        setTimeout(() => {
            dispatch(decrement())
            dispatch(setLoading(false))
        }, delay);
    }
}

// REDUCER

const initialState = {
    count: 0, 
    loading: false
}

export default function CounterReducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT: 
            return {
                ...state, 
                count: state.count + 1
            }
        case DECREMENT: 
            return {
                ...state, 
                count: state.count - 1
            }
        case SET_LOADING: 
            return {
                ...state, 
                loading: action.status
            }
        default: 
        return state
    }
}