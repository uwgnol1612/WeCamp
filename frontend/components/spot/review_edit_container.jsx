import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview, fetchSpot } from '../../actions/spot_actions';

const mapStateToProps = (state, ownProps) => ({
    spot: state.entities.spots[ownProps.match.params.spotId],
    review: (state.entities.spots[ownProps.match.params.spotId]).reviews[ownProps.match.params.reviewId]
});

const mapDispatchToProps = dispatch => {
    return {
        fetchSpot: id => dispatch(fetchSpot(id)),
        action: review => dispatch(updateReview(review)),
    };
};

class EditReviewForm extends React.Component {
    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId);
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.spot.id != this.props.match.params.spotId) {
    //         this.props.fetchSpot(this.props.match.params.spotId);
    //     }
    // }

    render() {
        
        const { action, review, spot } = this.props;
        return (
            <ReviewForm
                action={action}
                review={review}
                spot={spot} 
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm);