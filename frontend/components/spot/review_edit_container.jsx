import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview, fetchSpot } from '../../actions/spot_actions';

const mapStateToProps = (state, ownProps) => ({
   spot: state.entities.spots[ownProps.match.params.spotId],
   errors: state.errors.reviews
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
        // debugger

        if (!this.props.spot) return null
        
        const review = this.props.spot.reviews[this.props.match.params.reviewId]

        return (
            <ReviewForm
                action={this.props.action}
                review={review}
                spot={this.props.spot}
                fetchSpot={this.props.fetchSpot}
                errors={this.props.errors} 
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm);