import React from 'react';
import { Route } from 'react-router-dom'
import { AuthRoute } from '../util/route_util'
import Modal from './modal/modal'


import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';



const App = () => (
    <div>
        <Modal />
        <nav className="main-nav">
        <h1>WeCamp</h1>
        <GreetingContainer />
        </nav>
    </div>
)

export default App;