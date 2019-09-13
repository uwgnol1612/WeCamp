import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING } from '../actions/booking_actions'

import { RECEIVE_USER } from '../actions/user_actions'


const bookingsReducer = (state= {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_BOOKINGS:
            return Object.assign({}, action.bookings)

        case RECEIVE_BOOKING:
            return Object.assign({}, state, {[action.booking.id]: action.booking})

        case REMOVE_BOOKING:
            const newState = Object.assign({}, state);
            delete newState[action.bookingId]
            return newState

        case RECEIVE_USER:
            return Object.assign({}, state, action.user.bookings)
            
        default:
            return state;
    }

}

export default bookingsReducer;