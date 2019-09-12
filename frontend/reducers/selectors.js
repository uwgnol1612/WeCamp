export const selectReviewsForSpot = (props, spot) => {
    if (spot) {
        // debugger
        return spot.reviewIds.map(id => props.reviews[id])
    } else {
        return [];
    }
};






