import { connect } from 'react-redux';
import { updateFilter, removeFilter, removeAllFilters } from '../../actions/filter_actions';


import Search from './search';


const mapStateToProps = state => ({
    spots: Object.values(state.entities.spots)
});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    removeFilter: (filter) => dispatch(removeFilter(filter)),
    removeAllFilters: () => dispatch(removeAllFilters())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);



