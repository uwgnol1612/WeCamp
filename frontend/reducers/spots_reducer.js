import { RECEIVE_ALL_SPOTS, RECEIVE_SPOT } from '../actions/spot_actions'

const spotsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_SPOTS:
            return Object.assign({}, action.spots) 
        case RECEIVE_SPOT:
            const newSpot = { [action.spot.id]: action.spot };
            return Object.assign({}, state, newSpot);
        default:
            return state;
    }
}

export default spotsReducer;

