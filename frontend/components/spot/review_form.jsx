import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.review

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToSpotShow = this.navigateToSpotShow.bind(this);

    }

    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId);
    }

    
    navigateToSpotShow() {
        const url = `/spots/${this.props.match.params.spotId}`
        this.props.history.push(url);
    }

    handleSubmit(e) {
        e.preventDefault();
        const spotId = parseInt(this.props.match.params.spotId);
        const review = Object.assign({}, this.state, {
            spot_id: spotId
        });

        this.props.action(review).then(this.navigateToSpotShow);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        if (!this.props.spot) return null;

        const errors = this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)

        return (
            <div className="review-form-container">
                <h2>{this.props.spot.title}</h2>
                <form className="review-form">
                    <textarea
                        cols="50"
                        rows="15"
                        value={this.state.body}
                        placeholder="What do you think about the trip? Leave a review about your experience here..."
                        onChange={this.update("body")}
                    />

                    <div class="reviews-errors-messages">
                        <ul>
                            {errors}
                        </ul>
                    </div>

                    <div className='review-btn'>
                    <button onClick={this.handleSubmit}>Submit Review</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(ReviewForm);