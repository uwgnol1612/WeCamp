import { connect } from 'react-redux';
import ReviewList from './review_list'

import { fetchReviews, deleteReview, updateReview } from '../../actions/spot_actions'


const mapStateToProps = (state) => {
    const currentUser = state.entities.users[state.session.id]
    let reviews
    if (!currentUser.reviews) {
        reviews = []
    } else {
        reviews = Object.values(currentUser.reviews)
    };
    
    return {
        reviews
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchReviews: () => dispatch(fetchReviews()),
    deleteReview: (id) => dispatch(deleteReview(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);