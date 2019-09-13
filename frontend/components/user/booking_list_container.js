import { connect } from 'react-redux';

import { deleteBooking, fetchBookings } from '../../actions/booking_actions'
import { selectSpotsForBookings, selectBookingsForUser } from '../../reducers/selectors'





import BookingList from './booking_list'


const mapStateToProps = (state) => {

    const currentUser = state.entities.users[state.session.id]
    // const bookings = Object.values(state.entities.bookings)
    const bookings = selectBookingsForUser(state.entities, currentUser)
    const spots = selectSpotsForBookings(state.entities, bookings)

    return {
        currentUser,
        bookings,
        spots
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchBookings: () => dispatch(fetchBookings()),
    deleteBooking: (id) => dispatch(deleteBooking(id))
    
})


export default connect(mapStateToProps, mapDispatchToProps)(BookingList);