import React from 'react';
import { formatDate } from '../../util/date_util'
import { Link, withRouter } from 'react-router-dom'
import { deleteReview } from '../../actions/spot_actions';

const Review = (props) => {
    // debugger
    const formatedDate = formatDate(props.review.created_at);

    return (
        <div className='review-list-item-container'>
            <div className='review-list-item'>
                <div className='review-detail'>
                    <li>{props.author.username}</li>
                    <li>{formatedDate}</li>
                </div>
                <p className='review-body'>{props.review.body}</p>
            </div>
            <div className='review-links'>
                <Link to={`/spots/${props.review.spot_id}/reviews/${props.review.id}/edit`}>Edit</Link>
                <button onClick={() => props.deleteReview(props.review.id)}>Delete</button>
            </div>
        </div>
    );
};

export default Review;


