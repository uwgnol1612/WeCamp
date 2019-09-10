import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING } from '../actions/booking_actions'


const bookingsReducer = (state= {}, action) => {
    Object.freesze(state);
    switch (action.type) {
        case RECEIVE_ALL_BOOKINGS:
            return Object.assign({}, action.bookings)

        case RECEIVE_BOOKING:
            return Object.assign({}, state, {[action.booking.id]: action.booking})

        case REMOVE_BOOKING:
            const newState = Object.assign({}, state);
            delete newState[action.bookingId]
            return newState
            
        default:
            return state;
    }

}

export default bookingsReducer;