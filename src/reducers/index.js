


//import type constants
import { Increment, Decrement } from "../type";

// state to begin with
const INITIAL_STATE = {
    count: 0
};

// switch action based on types
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Increment:
            return { ...state, count: state.count + 1 };
        case Decrement:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};