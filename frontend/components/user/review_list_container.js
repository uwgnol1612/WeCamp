import { connect } from 'react-redux';
import ReviewList from './review_list'
import { selectReviewsForUser } from '../../reducers/selectors'

import { fetchReviews, deleteReview, updateReview } from '../../actions/spot_actions'

import { requestUser } from '../../actions/user_actions'


const mapStateToProps = (state) => {
    const currentUser = state.entities.users[state.session.id]
    const reviews = selectReviewsForUser(state.entities, currentUser)
    
    return {
        reviews,
        currentUser
    }
}

const mapDispatchToProps = (dispatch) => ({
    // fetchReviews: () => dispatch(fetchReviews()),
    deleteReview: (id) => dispatch(deleteReview(id)),
    requestUser: (id) => dispatch(requestUser(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);