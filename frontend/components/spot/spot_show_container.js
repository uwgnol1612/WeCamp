import { connect } from 'react-redux';
import { fetchSpot, deleteReview, fetchReviews } from '../../actions/spot_actions';
import SpotShow from './spot_show';
import { openModal } from '../../actions/modal_actions'
import { selectReviewsForSpot } from '../../reducers/selectors'
import { requestUsers } from '../../actions/user_actions'



const mapStateToProps = (state, ownProps) => {
    // debugger

    const spot = state.entities.spots[ownProps.match.params.spotId]
    const reviews = selectReviewsForSpot(state.entities, spot);
    const currentUser = state.session.id

    return {
        spot,
        reviews,
        currentUser
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchReviews: ()=> dispatch(fetchReviews()),
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    openModal: modal => dispatch(openModal(modal)),
    deleteReview: (id) => dispatch(deleteReview(id)),
    requestUsers: () => dispatch(requestUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotShow)