import React from 'react';
import { Route } from 'react-router-dom'
import { AuthRoute } from '../util/route_util'
import Modal from './modal/modal'
import GreetingContainer from './greeting/greeting_container';
import Splash from './splash/splash'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const App = () => (
    <div className="app-container">
        <Modal />
        <nav className="splash-nav">
            <div className="left-nav">
                <a href="#">WeCamp</a>
            </div>
            <div className="right-nav">
                <li><a href="#">Camp</a></li>
                <li><a href="#">Host</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Help</a></li>
                <GreetingContainer />
            </div>
        </nav>
        <Splash />
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
                            <li><span className="social-icon"><FontAwesomeIcon icon={faGithub}/></span>Github</li>
                            <li><span className="social-icon"><FontAwesomeIcon icon={faLinkedin}/></span>Linkedin</li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    </div>
)

export default App;