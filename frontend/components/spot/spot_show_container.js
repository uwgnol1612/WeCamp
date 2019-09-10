import { connect } from 'react-redux';
import { fetchSpot, deleteReview } from '../../actions/spot_actions';
import SpotShow from './spot_show';
import { openModal } from '../../actions/modal_actions'
import { selectReviewsForSpot, selectSpot } from '../../reducers/selectors'



const mapStateToProps = (state, ownProps) => {
    debugger

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
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    openModal: modal => dispatch(openModal(modal)),
    deleteReview: (id) => dispatch(deleteReview(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotShow)