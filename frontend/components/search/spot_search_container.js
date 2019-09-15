import { connect } from 'react-redux';
import { updateFilter, removeFilter, removeAllFilters } from '../../actions/filter_actions';

import { resetgeoLoc } from '../../actions/map_action';


import SpotSearch from './spot_search';


const mapStateToProps = state => ({
    spots: Object.values(state.entities.spots),
    geoLoc: state.ui.geoLoc.geoLoc
});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    removeFilter: (filter) => dispatch(removeFilter(filter)),
    removeAllFilters: () => dispatch(removeAllFilters()),
    resetgeoLoc: () => dispatch(resetgeoLoc())

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpotSearch);



