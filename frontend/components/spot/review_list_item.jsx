import React from 'react';
import { formatDate } from '../../util/date_util'
import { Link, withRouter } from 'react-router-dom'
import { deleteReview } from '../../actions/spot_actions';

const Review = (props) => {
  
    const formatedDate = formatDate(props.review.created_at);

    debugger
    
    if (!props.author) return null;

    let ReviewLink;
    if (props.currentUser === props.author.id) {
        ReviewLink = <div className='review-links'>
            <Link to={`/spots/${props.review.spot_id}/reviews/${props.review.id}/edit`}>Edit</Link>
            <button onClick={() => props.deleteReview(props.review.id)}>Delete</button>
        </div>
    } else {
        ReviewLink = <div></div>
    }

    return (
        <div className='review-list-item-container'>
            <div className='review-detail-img'>
                <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/camplogo.png" alt="" />
            </div>
            <div>
            <div className='review-list-item'>
                    <div className='review-detail'>
                        <li id='review-name'>{props.author.username}</li>
                        <li id='review-date'>{formatedDate}</li>
                    </div>
                <p id='review-body'>{props.review.body}</p>
            </div>
            {ReviewLink}
            </div>
        </div>
    );
};

export default Review;


