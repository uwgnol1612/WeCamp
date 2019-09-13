import { connect } from 'react-redux';
import UserShow from './user_show';

import { requestUser } from '../../actions/user_actions'

import { fetchSpots, deleteReview } from '../../actions/spot_actions'
import { deleteBooking, fetchBookings } from '../../actions/booking_actions'

import { selectReviewsForUser, selectBookingsForUser } from '../../reducers/selectors'



const mapStateToProps = (state) => {

    const user = state.entities.users[state.session.id]
    const spots = state.entities.spots
    const bookings = selectBookingsForUser(state.entities, user)
    const reviews = selectReviewsForUser(state.entities, user)

    return {
        user,
        spots,
        bookings,
        reviews
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchSpots: ()=> dispatch(fetchSpots()),
    requestUser: (id) => dispatch(requestUser(id)),
    // fetchBookings: () => dispatch(fetchBookings()),
    deleteBooking: (id)=> dispatch(deleteBooking(id)),
    deleteReview: (id)=> dispatch(deleteReview(id))
    
})


export default connect(mapStateToProps, mapDispatchToProps)(UserShow);