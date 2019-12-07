import { connect } from 'react-redux';
import SpotForm from './spot_form';

import { createSpot } from '../../actions/spot_actions'



const mapStateToProps = (state, ownProps) => {
    const errors = state.errors.spots
    const currentUser = state.session.id

    return {
        currentUser,
        errors
    };
}

const mapDispatchToProps = dispatch => ({
    createSpot: (spot) => dispatch(createSpot(spot))
})



export default connect(mapStateToProps, mapDispatchToProps)(SpotForm)