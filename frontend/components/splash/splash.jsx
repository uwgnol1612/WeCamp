import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Splash = () => (
    <div className="splash-main">
        <div className="splash-title">Everywhere you want to camp.</div>
        <div className="splash-subtitle1"> Book unique camping experiences on over <strong className ="bold"> 300,000 </strong> campsites, ranches, vineyards, public parks and more.</div>
        <div className="splash-search-container">
            <span className="search-bar-icon"><FontAwesomeIcon icon={faSearch}/></span>
        </div>
        <div className="splash-subtitle2">Discover camping...</div>
        <div className="splash-spots-section">
            <div className="splash-spot">
                <a className= "spot-image" href="#">
                    <img src="" alt=""/>
                </a>
                <div className= "spot-details">
                    <h3>Beach camping</h3>
                    <p>Best options near me</p>
                </div>
            </div>

            <div className="splash-spot">
                <a className="spot-image" href="#">
                    <img src="" alt="" />
                </a>
                <div className="spot-details">
                    <h3>Lake camping</h3>
                    <p>Best options near me</p>
                </div>
            </div>

            <div className="splash-spot">
                <a className="spot-image" href="#">
                    <img src="" alt="" />
                </a>
                <div className="spot-details">
                    <h3>Pet friendly camping</h3>
                    <p>Best options near me</p>
                </div>
            </div>

            <div className="splash-spot">
                <a className="spot-image" href="#">
                    <img src="" alt="" />
                </a>
                <div className="spot-details">
                    <h3>Grand Teton</h3>
                    <p>Wyoming</p>
                </div>
            </div>

            <div className="splash-spot">
                <a className="spot-image" href="#">
                    <img src="" alt="" />
                </a>
                <div className="spot-details">
                    <h3>Yellowstone</h3>
                    <p>Wyoming</p>
                </div>
            </div>

            <div className="splash-spot">
                <a className="spot-image" href="#">
                    <img src="" alt="" />
                </a>
                <div className="spot-details">
                    <h3>Rocky Mountains</h3>
                    <p>Colorado</p>
                </div>
            </div>

            <div className="splash-spot">
                <a className="spot-image" href="#">
                    <img src="" alt="" />
                </a>
                <div className="spot-details">
                    <h3>Yosemite</h3>
                    <p>California</p>
                </div>
            </div>

            <div className="splash-spot">
                <a className="spot-image" href="#">
                    <img src="" alt="" />
                </a>
                <div className="spot-details">
                    <h3>Zion</h3>
                    <p>Utah</p>
                </div>
            </div>

            <div className="splash-spot">
                <a className="spot-image" href="#">
                    <img src="" alt="" />
                </a>
                <div className="spot-details">
                    <h3>Grand Canyon</h3>
                    <p>Arizona</p>
                </div>
            </div>


        </div>
    </div>
)

export default Splash;