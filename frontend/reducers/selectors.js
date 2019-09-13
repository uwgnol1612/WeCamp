

export const selectReviewsForSpot = (props, spot) => {

    // debugger
    if (!spot) return [];
    
    let res = [];
    if (spot.reviewIds.length === 0) {
        return res;
    }
    spot.reviewIds.forEach(id => {
        if (props.reviews[id])
            res.push(props.reviews[id])
    })
    return res;
};


export const selectReviewsForUser = (props, user) => {

    
    let res = [];
    if (Object.keys(props.reviews).length === 0) {
        return res;
    }

    Object.values(props.reviews).forEach(review => {
        if (review.user_id === user.id)
            res.push(review)
    })
    return res;

}


export const selectBookingsForUser = (props, user) => {

    // debugger
    let res = [];
    if (Object.keys(props.bookings).length === 0) {
        return res;
    } 

    Object.values(props.bookings).forEach(booking => {
        if (booking.user_id === user.id)
            res.push(booking)
    })
    return res;

}

export const selectSpotsForBookings = (props, bookings) => {
    let res = [];
    if (bookings.length === 0) {
        return res;
    }
    bookings.forEach(booking => {
        if (props.spots[booking.spot_id]) {
            res.push(props.spots[booking.spot_id])
        }
    })
    return res;
}



