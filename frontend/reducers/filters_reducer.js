import { UPDATE_FILTER, REMOVE_FILTER, REMOVE_ALL_FILTERS } from '../actions/filter_actions';

const defaultFilters = {
    bounds: {}
}

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_FILTER:
            const newFilter = {[action.filter]: action.value}
            return Object.assign({}, state, newFilter);
        case REMOVE_FILTER:
            const newState = Object.assign({}, state)
            delete newState[action.filter]
            return newState;
        case REMOVE_ALL_FILTERS:
            return Object.assign({}, {bounds : state.bounds});
        default:
            return state;
    }

}

export default filtersReducer;