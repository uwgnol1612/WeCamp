export const fetchspots = (data) => {
    return $.ajax({
        method: 'GET',
        url: '/api/spots',
        data
    })
}


export const fetchSpot = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/spots/${id}`
    })
};
