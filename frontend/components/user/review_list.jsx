import React from 'react';
import { formatDate } from '../../util/date_util';
import { Link } from 'react-router-dom'

class ReviewList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestUser(this.props.currentUser.id);
    }

    render() {

        const reviews = this.props.reviews.map(review => {

            const formatedDate = formatDate(review.created_at);

            return (
                <li key={review.id} className='booking-list-item'>
                        <div className='user-review-date'>{formatedDate}</div>
                        <div className='user-review-body'>{review.body}</div>
                        <div className='review-btns'>
                            {/* <Link to={`/spots/${review.spot_id}/reviews/${review.id}/edit`}>Edit</Link> */}
                            <button onClick={() => this.props.deleteReview(review.id)}>Delete</button>
                        </div>
                </li>
            )
        }
       
        )

        return (
            <div>
                <ul>
                    {reviews}
                </ul>
            </div>
        )
    }

}

export default ReviewList;