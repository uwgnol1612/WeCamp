import React from 'react'

import SpotIndex from './spot_index';
import SpotMap from './spot_map';

class SpotSearch extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = this.props.filters
       
        this.handleClick = this.handleClick.bind(this)
        this.handleClearFilters = this.handleClearFilters.bind(this);
       
    }

    // componentDidMount() {
    //     this.props.removeAllFilters();
    // }


    handleClick(filterType, filterValue, filterId) {

        $(`#${filterId}`).toggleClass('clicked')

        if (!this.props.filters[filterType]) {
            this.props.updateFilter(filterType, filterValue)
        } else {
            this.props.removeFilter(filterType)
        }
    }


    handleClearFilters(e) {
        e.preventDefault();
        $('.clicked').toggleClass('clicked')
        this.props.removeAllFilters();
    }


   render() {
    return (
        <div className="spot-search-section">
            <ul className="spot-filters-container">
                <div className="spot-dropdown">
                    <li><button onClick={()=> showDropdown("spot-group-filter")} className="dropbtn" >Group size</button>
                        <div id="spot-group-filter" className="spot-filter-items"> 
                            <button 
                                className="filter-button" 
                                id="groupSize-filter-5" 
                                onClick={() => this.handleClick('groupSize', 5, 'groupSize-filter-5')}>
                                5+ Campers
                            </button>
                            <button
                                className="filter-button"
                                id="groupSize-filter-10"
                                onClick={() => this.handleClick('groupSize', 10, 'groupSize-filter-10')}>
                                10+ Campers
                            </button>
                            <button
                                className="filter-button"
                                id="groupSize-filter-20"
                                onClick={() => this.handleClick('groupSize', 20, 'groupSize-filter-20')}>
                                20+ Campers
                            </button>
                        </div>
                    </li>
                </div>
                <div className="spot-dropdown">
                    <li><button onClick={()=> showDropdown('spot-price-filter')} className="dropbtn" >Price</button>
                        <div id="spot-price-filter" className="spot-filter-items">
                            <button
                                className="filter-button"
                                id="price-filter-50"
                                onClick={() => this.handleClick('price', 50, 'price-filter-50')}>
                                Under $50
                            </button>
                            <button
                                className="filter-button"
                                id="price-filter-100"
                                onClick={() => this.handleClick('price', 100, 'price-filter-100')}>
                                Under $100
                            </button>
                            <button
                                className="filter-button"
                                id="price-filter-175"
                                onClick={() => this.handleClick('price', 175, 'price-filter-175')}>
                                Under $175
                            </button>
                        </div>
                    </li>
                </div>
                <div className="spot-dropdown">
                    <li><button onClick={() => showDropdown('spot-amenity-filter')} className="dropbtn" >Amenities</button>
                        <div id="spot-amenity-filter" className="spot-filter-items">
                            <button
                                className="filter-button"
                                id="pet-filter"
                                onClick={() => this.handleClick('pets', true, 'pet-filter')}><img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/pet-friendly.png' />
                                Pets allowed
                            </button>
                            <button
                                className="filter-button"
                                id="toilet-filter"
                                onClick={() => this.handleClick('toilet', true, 'toilet-filter')}><img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/toilet-paper.png' />
                                Toilets
                            </button>
                            <button
                                className="filter-button"
                                id="campfire-filter"
                                onClick={() => this.handleClick('campfire', true, 'campfire-filter')}><img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/bonfire.png' />
                                Campfires
                            </button>
                            <button
                                className="filter-button"
                                id="water-filter"
                                onClick={() => this.handleClick('water', true, 'water-filter')}><img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/water.png' />
                                Water
                            </button>
                        </div>
                    </li>
                </div>
                <div className="spot-dropdown">
                    <li><button onClick={() => showDropdown('spot-activity-filter')} className="dropbtn" >Activities</button>
                        <div id="spot-activity-filter" className="spot-filter-items">
                            <button
                                className="filter-button"
                                id="hiking-filter"
                                onClick={() => this.handleClick('hiking', true, 'hiking-filter')}><img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/hiking.png' />
                                Hiking
                            </button>
                            <button
                                className="filter-button"
                                id="swimming-filter"
                                onClick={() => this.handleClick('swimming', true, 'swimming-filter')}><img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/swimming.png' />
                                Swimming
                            </button>
                            <button
                                className="filter-button"
                                id="fishing-filter"
                                onClick={() => this.handleClick('fishing', true, 'fishing-filter')}><img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/fishing.png' />
                                Fishing
                            </button>
                            <button
                                className="filter-button"
                                id="wildlife-filter"
                                onClick={() => this.handleClick('wildlife', true, 'wildlife-filter')}><img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/dove.png' />
                                Wildlife watching
                            </button>
                        </div>
                    </li>
                </div>
                <div className="spot-dropdown">
                    <li><button onClick={() => showDropdown('spot-access-filter')} className="dropbtn" >Accessibility</button>
                        <div id="spot-access-filter" className="spot-filter-items">
                            <button
                                className="filter-button"
                                id="tent-filter"
                                onClick={() => this.handleClick('Tent', true, 'tent-filter')}><img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/dove.png' />
                                Tent
                            </button>
                            <button
                                className="filter-button"
                                id="parking-filter"
                                onClick={() => this.handleClick('parking', true, 'parking-filter')}><img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/parking.png' />
                                Parking
                            </button>
                        </div>
                    </li>
                </div>
                <div className="spot-dropdown">
                    <li><button onClick={this.handleClearFilters}>Clear filters</button></li>
                </div>
            </ul>
            <div className="spot-search-main">
                <div className="spot-index">
                    <SpotIndex spots={this.props.spots} />
                </div>
                <div className="spot-map">
                    <SpotMap
                        spots={this.props.spots}
                        updateFilter={this.props.updateFilter}
                        geoLoc={this.props.geoLoc}
                        resetgeoLoc={this.props.resetgeoLoc}
                    />
                </div>
            </div>

        </div>  
    )}

};

export default SpotSearch;















