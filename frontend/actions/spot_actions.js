export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW"
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

import * as SpotApiUtil from '../util/spot_api_util';


export const receiveAllSpots = (spots) => ({
    type: RECEIVE_ALL_SPOTS,
    spots
})

export const receiveSpot = (spot) => ({
    type: RECEIVE_SPOT,
    spot
}) 

export const receiveReview = ({review, user}) => ({
    type: RECEIVE_REVIEW,
    review, 
    user
})
 
export const removeReview = ({ review }) => ({
    type: REMOVE_REVIEW,
    reviewId: review.id
})


export const receiveReviewErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})


export const fetchSpots = (filters) => dispatch => {
    return SpotApiUtil.fetchspots(filters).then((spots) => dispatch(receiveAllSpots(spots)))
}

export const fetchSpot = (id) => dispatch => {
    return SpotApiUtil.fetchSpot(id).then((spot) => dispatch(receiveSpot(spot)))
}



export const createReview = (review) => dispatch => {
    return SpotApiUtil.createReview(review).then(
        review => dispatch(receiveReview(review)),
        err => dispatch(receiveReviewErrors(err.responseJSON))
    )
}

export const updateReview = (review) => dispatch => {
    return SpotApiUtil.updateReview(review).then(
        review => dispatch(receiveReview(review)),
        err => dispatch(receiveReviewErrors(err.responseJSON))
    )
}

export const deleteReview = (id) => dispatch => {
    return SpotApiUtil.deleteReview(id).then((review) => dispatch(removeReview(review)))
}

