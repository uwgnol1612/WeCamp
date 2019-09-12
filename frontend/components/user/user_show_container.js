import { connect } from 'react-redux';
import UserShow from './user_show';

import { requestUsers } from '../../actions/user_actions'

import { fetchSpots } from '../../actions/spot_actions'
import { deleteBooking } from '../../actions/booking_actions'


const mapStateToProps = (state) => {
    return {
    
    user: state.entities.users[state.session.id],
    spots: state.entities.spots
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchSpots: ()=> dispatch(fetchSpots()),
    requestUsers: () => dispatch(requestUsers()),
    deleteBooking: (id)=> dispatch(deleteBooking(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(UserShow);