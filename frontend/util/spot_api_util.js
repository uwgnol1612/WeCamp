export const fetchspots = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/spots'
    })
}


export const fetchSpot = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/spots/${id}`
    })
};
