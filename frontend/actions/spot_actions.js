export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";

import * as SpotApiUtil from '../util/spot_api_util';


export const receiveAllSpots = (spots) => ({
    type: RECEIVE_ALL_SPOTS,
    spots
})

export const receiveSpot = (spot) => ({
    type: RECEIVE_SPOT,
    spot
}) 

export const fetchSpots = (filters) => dispatch => {
    return SpotApiUtil.fetchspots(filters).then((spots) => dispatch(receiveAllSpots(spots)))
}

export const fetchSpot = (id) => dispatch => {
    return SpotApiUtil.fetchSpot(id).then((spot) => dispatch(receiveSpot(spot)))
}
