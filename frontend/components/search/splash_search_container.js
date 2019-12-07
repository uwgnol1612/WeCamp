import { connect } from 'react-redux';
import SplashSearch from './splash_search'

import { receiveLocation } from '../../actions/map_action'

const mapDispatchToProps = (dispatch) => ({
    receiveLocation: (location)=> dispatch(receiveLocation(location))
})

export default connect(null, mapDispatchToProps)(SplashSearch);