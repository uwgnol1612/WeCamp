export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW"
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";

export const START_LOADING_ALL_SPOTS = 'START_LOADING_ALL_SPOTS';

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

export const receiveAllReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
})


export const removeReview = ({ review }) => ({
    type: REMOVE_REVIEW,
    reviewId: review.id
})


export const receiveReviewErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})


export const startLoadingAllSpots = () => ({
    type: START_LOADING_ALL_SPOTS
});



export const fetchSpots = (filters) => dispatch => {
    dispatch(startLoadingAllSpots());
    return SpotApiUtil.fetchspots(filters).then((spots) => dispatch(receiveAllSpots(spots)))
}


export const fetchSpot = (id) => dispatch => {
    return SpotApiUtil.fetchSpot(id).then((spot) => dispatch(receiveSpot(spot)))
}


export const fetchReviews = () => dispatch => {
    return SpotApiUtil.fetchReviews().then((reviews) => dispatch(receiveAllReviews(reviews)))
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
