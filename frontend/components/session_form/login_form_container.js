import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import LoginForm from './login_form'
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user)=> dispatch(login(user)),
    openModal: ()=> dispatch(openModal('signup')),
    closeModal: ()=> dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)