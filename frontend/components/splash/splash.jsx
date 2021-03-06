import React from 'react';
import SplashSearchContainer from '../search/splash_search_container'

const Splash = () => (
    <div>
        <div className="splash-main">
            <div className="splash-title">Everywhere you want to camp.</div>
            <div className="splash-subtitle1"> Book unique camping experiences on over <strong className ="bold"> 300,000 </strong> campsites, ranches, vineyards, public parks and more.</div>
            <SplashSearchContainer />
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
       
    </div>
)

export default Splash;