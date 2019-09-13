import { RECEIVE_ALL_SPOTS, START_LOADING_ALL_SPOTS } from '../actions/spot_actions';

const initialState = {
    indexLoading: false
};

const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_SPOTS:
            return Object.assign({}, state, { indexLoading: false });
        case START_LOADING_ALL_SPOTS:
            return Object.assign({}, state, { indexLoading: true });
        default:
            return state;
    }
};

export default loadingReducer;