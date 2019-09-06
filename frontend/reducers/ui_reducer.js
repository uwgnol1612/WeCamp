import modalReducer from './modal_reducer';
import filtersReducer from './filters_reducer'
import { combineReducers } from 'redux';


const uiReducer = combineReducers({
    modal: modalReducer,
    filters: filtersReducer
})

export default uiReducer;