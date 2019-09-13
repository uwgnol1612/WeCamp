import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SpotSearchContainer from './search/spot_search_container';
import Splash from './splash/splash';
import SpotShowContainer from './spot/spot_show_container';
import ReviewFormContainer from './spot/review_form_container';
import ReviewEditContainer from './spot/review_edit_container';
import UserShowContainer from './user/user_show_container'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const App = () => (
    <div className="app-container">
        <Modal />
        <nav className="splash-nav">
            <div className="left-nav">
                <Link to="/"><h1>WeCamp</h1></Link>
                <form className='search-bar-input'>
                    <span className="search-bar-icon-nav"><FontAwesomeIcon icon={faSearch} /></span>
                    <input placeholder='Search...' type="text" />
                </form>
            </div>
            <div className="right-nav">
                <li><a href="#">Camp</a></li>
                <li><a href="#">Host</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Help</a></li>
                <GreetingContainer />
            </div>
        </nav>
        <Switch>
            <Route exact path="/spots/:spotId" component={SpotShowContainer} />
            <Route exact path="/spots/:spotId/review/new" component={ReviewFormContainer} />
            <Route exact path="/spots/:spotId/reviews/:reviewId/edit" component={ReviewEditContainer} />
            <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />

            <Route path='/spots' component={SpotSearchContainer} />
            <Route exact path='/' component={Splash} />
        </Switch>
        
    </div>
)

export default App;