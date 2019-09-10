import { RECEIVE_REVIEW_ERRORS, RECEIVE_SPOT } from '../actions/spot_actions';

const reviewErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
        case RECEIVE_SPOT:
            return [];
        default:
            return state;
    }
}

export default reviewErrorsReducer;