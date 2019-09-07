import { fetchSpots } from './spot_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const REMOVE_ALL_FILTERS = "REMOVE_ALL_FILTERS"
 

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const removeSingleFilter = (filter) => ({
    type: REMOVE_FILTER,
    filter
})

export const removeFilters = () => ({
    type: REMOVE_ALL_FILTERS
})

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchSpots(getState().ui.filters)(dispatch);
};

export const removeFilter = (filter) => (dispatch, getState) => {
    dispatch(removeSingleFilter(filter));
    return fetchSpots(getState().ui.filters)(dispatch);
}

export const removeAllFilters = () => (dispatch, getState) => {
    dispatch(removeFilters());
    return fetchSpots(getState().ui.filters)(dispatch);
}

