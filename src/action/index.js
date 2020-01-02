import { Increment, Decrement } from './type'

export const increment = () => {
    return {
        type: Increment
    }
}
export const decrement = () => {
    return {
        type: Decrement
    }
}
