export const RECEIVE_LOCATION = "RECEIVE_LOCATION";
export const RESET_LOCATION = "RESET_LOCATION";

export const receiveLocation = (geoLoc) => ({
    type: RECEIVE_LOCATION,
    geoLoc
})

export const resetgeoLoc = () => ({
    type: RESET_LOCATION
})