import { connect } from 'react-redux'
import ReviewForm from './review_form'
import { createReview } from '../../actions/spot_actions'

const mapStateToProps = (state, ownProps) => ({
    spot: state.entities.spots[ownProps.match.params.spotId],
    review: {body: ""}
})


const mapDispatchToProps = (dispatch) => ({
    action: review => dispatch(createReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);