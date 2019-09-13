import { RECEIVE_SPOT, RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_ALL_REVIEWS } from '../actions/spot_actions'

import { RECEIVE_USER } from '../actions/user_actions';


const reviewsReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SPOT:
            return Object.assign({}, state, action.spot.reviews);
        case RECEIVE_REVIEW:
            return Object.assign({}, state, {[action.review.id]: action.review});
        case RECEIVE_ALL_REVIEWS:
            return Object.assign({}, action.reviews);
        case RECEIVE_USER:
            return Object.assign({}, state, action.user.reviews)
        case REMOVE_REVIEW:
            let newState = Object.assign({}, state);
            delete newState[action.reviewId]
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;