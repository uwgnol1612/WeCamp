import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = {
    bounds: {}
}

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_FILTER:
            const newFilter = {[action.filter]: action.value}
            return Object.assign({}, state, newFilter);
        default:
            return state;
    }

}

export default filtersReducer;