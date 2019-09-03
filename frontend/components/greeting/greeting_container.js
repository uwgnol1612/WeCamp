import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    signup: () => dispatch(openModal('signup')),
    login: ()=> dispatch(openModal('login'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)