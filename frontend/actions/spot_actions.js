export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";

import * as SpotApiUtil from '../util/spot_api_util'


export const receiveAllSpots = (spots) => ({
    type: RECEIVE_ALL_SPOTS,
    spots
})

export const receiveSpot = ({ spot, photoUrls }) => ({
    type: RECEIVE_SPOT,
    spot,
    photoUrls

}) 


export const fetchSpots = () => dispatch => {
    return SpotApiUtil.fetchspots().then((spots) => dispatch(receiveAllSpots(spots)))
}

export const fetchSpot = (id) => dispatch => {
    return SpotApiUtil.fetchspot(id).then((payload) => dispatch(receiveSpot(payload)))
}
