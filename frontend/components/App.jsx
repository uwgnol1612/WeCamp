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
import MapSearchContainer from '../components/search/google_map_search_container'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';




const App = () => (
    <div className="app-container">
        <Modal />
        <nav className="splash-nav">
            <div className="left-nav">
                <Link to="/"><h1>WeCamp</h1></Link>
                <MapSearchContainer />
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
        <footer>
            <section className="footer-main">
                <div className="footer-container">
                    <div className="col-1-2">
                        <h5>WeCamp is everywhere you want to camp.</h5>
                        <p>Discover unique experiences on ranches, nature preserves, farms, vineyards, and public campgrounds across the U.S. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites, car camping, airstreams, tiny houses, RV camping, glamping tents and more.</p>
                    </div>
                    <div className="col-1-2 col-1-3">
                        <h5>Browse</h5>
                        <ul>
                            <li>Discover Camps</li>
                            <li>Help</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-1-2 col-1-3">
                        <h5>About</h5>
                        <ul>
                            <li>Journal</li>
                            <li>Our Story</li>
                            <li>The Team</li>
                        </ul>
                    </div>
                    <div className="col-1-2 col-1-3">
                        <h5>Social</h5>
                        <ul>
                            <li><a href="https://github.com/uwgnol1612">
                                <span className="social-icon"><FontAwesomeIcon icon={faGithub} /></span>Github
                                </a>
                            </li>
                            <li><a href="https://www.linkedin.com/in/long-wu-7bb60994/">
                                <span className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></span>Linkedin
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer> 
    </div>
)

export default App;