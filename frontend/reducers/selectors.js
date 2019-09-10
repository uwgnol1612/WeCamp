export const selectReviewsForSpot = (props, spot) => {
    if (spot) {
        debugger
        return Object.values(props.reviews)
    } else {
        return [];
    }
};


