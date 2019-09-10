import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_REVIEW } from '../actions/spot_actions'
import { RECEIVE_USERS } from '../actions/user_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_REVIEW:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_USERS:
            return Object.assign({}, action.users)
        default:
            return state;
    }
}

export default usersReducer;