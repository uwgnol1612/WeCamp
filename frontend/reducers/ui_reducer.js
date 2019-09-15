import modalReducer from './modal_reducer';
import filtersReducer from './filters_reducer';
import loadingReducer from './loading_reducer';
import locationReducer from './location_reducer';

import { combineReducers } from 'redux';


const uiReducer = combineReducers({
    modal: modalReducer,
    filters: filtersReducer,
    loading: loadingReducer,
    geoLoc: locationReducer
})

export default uiReducer;