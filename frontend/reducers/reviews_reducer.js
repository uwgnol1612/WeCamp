import { RECEIVE_SPOT, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/spot_actions'


const reviewsReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SPOT:
            return Object.assign({}, state, action.spot.reviews);
        case RECEIVE_REVIEW:
            return Object.assign({}, state, {[action.review.id]: action.review});
        case REMOVE_REVIEW:
            let newState = Object.assign({}, state);
            delete newState[action.reviewId]
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;