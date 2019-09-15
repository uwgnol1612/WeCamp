import { connect } from 'react-redux';
import MapSearch from './google_map_search_form'

import { receiveLocation } from '../../actions/map_action'

const mapDispatchToProps = (dispatch) => ({
    receiveLocation: (location)=> dispatch(receiveLocation(location))
})

export default connect(null, mapDispatchToProps)(MapSearch);