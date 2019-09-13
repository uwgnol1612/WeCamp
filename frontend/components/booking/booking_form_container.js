import { connect } from 'react-redux'
import BookingForm from './booking_form'
import { openModal } from '../../actions/modal_actions'
import { fetchSpot } from '../../actions/spot_actions'
import { createBooking } from '../../actions/booking_actions'

const mapStateToProps = (state, ownProps) => {

    return {
    spot: Object.values(state.entities.spots)[0],
    currentUserId: state.session.id,
    errors: state.errors.bookings
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchSpot: id => dispatch(fetchSpot(id)),
    createBooking: (booking) => dispatch(createBooking(booking)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);