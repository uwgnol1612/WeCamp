import React from 'react';
import { Route, Link } from 'react-router-dom'
import { AuthRoute } from '../util/route_util'
import Modal from './modal/modal'
import GreetingContainer from './greeting/greeting_container';
import SpotIndexContainer from './search/spot_index_container';
import Splash from './splash/splash'


const App = () => (
    <div className="app-container">
        <Modal />
        <nav className="splash-nav">
            <div className="left-nav">
                <Link to="/"><h1>WeCamp</h1></Link>
            </div>
            <div className="right-nav">
                <li><a href="#">Camp</a></li>
                <li><a href="#">Host</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Help</a></li>
                <GreetingContainer />
            </div>
        </nav>
        <Route exact path='/' component={Splash}/>
        <Route path='/spots' component={SpotIndexContainer}/>
        
    </div>
)

export default App;