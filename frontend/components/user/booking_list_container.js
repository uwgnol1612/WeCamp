import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions'
import { deleteBooking, fetchBookings } from '../../actions/booking_actions'

import BookingList from './booking_list'


const mapStateToProps = (state) => {

    const currentUser = state.entities.users[state.session.id]
    let bookings;
    if (!currentUser.bookings) {
        bookings = []
    } else {
        bookings = Object.values(currentUser.bookings)
        }

    const spots = state.entities.spots
    return {
        bookings,
        spots
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchSpots: () => dispatch(fetchSpots()),
    deleteBooking: (id) => dispatch(deleteBooking(id)),
    fetchBookings: () => dispatch(fetchBookings())
})


export default connect(mapStateToProps, mapDispatchToProps)(BookingList);