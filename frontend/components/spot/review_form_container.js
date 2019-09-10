import { connect } from 'react-redux'
import ReviewForm from './review_form'
import { createReview, fetchSpot } from '../../actions/spot_actions'

const mapStateToProps = (state, ownProps) => {

    return {
    spot: state.entities.spots[ownProps.match.params.spotId],
    review: {body: ""},
    errors: state.errors.reviews
    }
    
}


const mapDispatchToProps = (dispatch) => ({
    fetchSpot: id => dispatch(fetchSpot(id)),
    action: review => dispatch(createReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);