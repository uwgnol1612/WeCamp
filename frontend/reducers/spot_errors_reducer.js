import { RECEIVE_SPOT_ERRORS, RECEIVE_SPOT } from '../actions/spot_actions';

const spotErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SPOT_ERRORS:
            return action.errors;
        case RECEIVE_SPOT:
            return [];
        default:
            return state;
    }
}

export default spotErrorsReducer;