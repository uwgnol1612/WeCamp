import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import "react-day-picker/lib/style.css"

const Splash = () => (
    <div>
        <div className="splash-main">
            <div className="splash-title">Everywhere you want to camp.</div>
            <div className="splash-subtitle1"> Book unique camping experiences on over <strong className ="bold"> 300,000 </strong> campsites, ranches, vineyards, public parks and more.</div>
            <div className="splash-search-container">
                <form className='geo-input'>
                    <span className="search-bar-icon"><FontAwesomeIcon icon={faSearch}/></span>
                    <input placeholder='Find camping near...' type="text"/>
                </form>
                <div className='date-input'>
                    <span className="date-search-icon"><FontAwesomeIcon icon={faCalendarAlt} /></span>
                {/* <DayPickerInput
                    placeholder='Enter Dates'
                    dayPickerProps={{
                        disabledDays: { before: new Date() },
                    }}
                /> */}
                </div>
                    <div className='spash-search-btn' id='search-link'><Link to='/spots'>Search</Link></div>
            </div>
            <div className="splash-subtitle2">Discover camping...</div>
            <div className="splash-spots-section">
                <div className="splash-spot">
                    <a className= "spot-image" href="#/spots">
                        <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/beach_camping.jpg" alt="beach_camping"/>
                    </a>
                    <div className= "spot-details">
                        <h3>Beach camping</h3>
                        <p>Best options near me</p>
                    </div>
                </div>

                <div className="splash-spot">
                    <a className="spot-image" href="#/spots">
                        <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/lake_camping.jpg" alt="lake_camping" />
                    </a>
                    <div className="spot-details">
                        <h3>Lake camping</h3>
                        <p>Best options near me</p>
                    </div>
                </div>

                <div className="splash-spot">
                    <a className="spot-image" href="#/spots">
                        <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/pet_friendly.jpg" alt="pet_friendly_camping" />
                    </a>
                    <div className="spot-details">
                        <h3>Pet friendly camping</h3>
                        <p>Best options near me</p>
                    </div>
                </div>

                <div className="splash-spot">
                    <a className="spot-image" href="#/spots">
                        <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/grand+teton.jpg" alt="grand_teton" />
                    </a>
                    <div className="spot-details">
                        <h3>Grand Teton</h3>
                        <p>Wyoming</p>
                    </div>
                </div>

                <div className="splash-spot">
                    <a className="spot-image" href="#/spots">
                        <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/Yellowstone.jpg" alt="yellowstone" />
                    </a>
                    <div className="spot-details">
                        <h3>Yellowstone</h3>
                        <p>Wyoming</p>
                    </div>
                </div>

                <div className="splash-spot">
                    <a className="spot-image" href="#/spots">
                        <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/rockymountain.jpg" alt="rocky_mountain" />
                    </a>
                    <div className="spot-details">
                        <h3>Rocky Mountains</h3>
                        <p>Colorado</p>
                    </div>
                </div>

                <div className="splash-spot">
                    <a className="spot-image" href="#/spots">
                        <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/visiting-yosemite-fall.jpg" alt="yosemite" />
                    </a>
                    <div className="spot-details">
                        <h3>Yosemite</h3>
                        <p>California</p>
                    </div>
                </div>

                <div className="splash-spot">
                    <a className="spot-image" href="#/spots">
                        <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/zion.jpg" alt="zion" />
                    </a>
                    <div className="spot-details">
                        <h3>Zion</h3>
                        <p>Utah</p>
                    </div>
                </div>

                <div className="splash-spot">
                    <a className="spot-image" href="#/spots">
                        <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/grand+canyon.jpg" alt="grand_cayon" />
                    </a>
                    <div className="spot-details">
                        <h3>Grand Canyon</h3>
                        <p>Arizona</p>
                    </div>
                </div>

            </div>
        </div>
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

export default Splash;