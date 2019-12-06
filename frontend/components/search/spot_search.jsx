import React from 'react'

import SpotIndex from './spot_index';
import SpotMap from './spot_map';
import Button from './filter_button';

class SpotSearch extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            filters: "On"
        }
        this.handleClearFilters = this.handleClearFilters.bind(this);
        this.resetFilterState = this.resetFilterState.bind(this);

    }

    handleClearFilters(e) {
        e.preventDefault();
        this.props.removeAllFilters();
        this.setState({
            filters: "Off"
        })
    }

    resetFilterState() {
        this.setState({
            filters: "On"
        })
    }


   render() {
    return (
        <div className="spot-search-section">
            <ul className="spot-filters-container">
                <div className="spot-dropdown">
                    <li><button onClick={()=> showDropdown('spot-group-filter')} className="dropbtn" >Group size</button>
                        <div id="spot-group-filter" className="spot-filter-items">
                            <Button
                                // filterState={this.state.filters}
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='groupSize'
                                filterValue= {5}
                                description='5+ Campers' />
                            <Button
                                // filterState={this.state.filters}
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='groupSize'
                                filterValue={10}
                                description='10+ Campers' />
                            <Button
                               
                                // filterState={this.state.filters}
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='groupSize'
                                filterValue={20}
                                description='20+ Campers' />
                        </div>
                    </li>
                </div>
                <div className="spot-dropdown">
                    <li><button onClick={()=> showDropdown('spot-price-filter')} className="dropbtn" >Price</button>
                        <div id="spot-price-filter" className="spot-filter-items">
                            <Button
                                // filterState={this.state.filters}
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='price'
                                filterValue={50}
                                description='Under $50'/>
                            <Button
                                // filterState={this.state.filters}
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='price'
                                filterValue={100}
                                description='Under $100' />
                            <Button
                                // filterState={this.state.filters}
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='price'
                                filterValue={175}
                                description='Under $175' />
                        </div>
                    </li>
                </div>
                <div className="spot-dropdown">
                    <li><button onClick={() => showDropdown('spot-amenity-filter')} className="dropbtn" >Amenities</button>
                        <div id="spot-amenity-filter" className="spot-filter-items">
                            <Button
                                // filterState={this.state.filters} 
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='pets'
                                filterValue={true}
                                description='Pets allowed'
                                iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/pet-friendly.png'/>
                            <Button
                                // filterState={this.state.filters}
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='toilet'
                                filterValue={true}
                                description='Toilets'
                                iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/toilet-paper.png'/>
                            <Button
                                // filterState={this.state.filters}
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='campfire'
                                filterValue={true}
                                description='Campfires'
                                iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/bonfire.png'/>
                            <Button
                                // filterState={this.state.filters}
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='water'
                                filterValue={true}
                                description='Water'
                                iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/water.png'/>
                        </div>
                    </li>
                </div>
                <div className="spot-dropdown">
                    <li><button onClick={() => showDropdown('spot-activity-filter')} className="dropbtn" >Activities</button>
                        <div id="spot-activity-filter" className="spot-filter-items">
                            <Button
                                // filterState={this.state.filters}
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='hiking'
                                filterValue={true}
                                description='Hiking'
                                iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/hiking.png' />
                            <Button
                                // filterState={this.state.filters}
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='swimming'
                                filterValue={true}
                                description='Swimming'
                                iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/swimming.png' />
                            <Button
                                // filterState={this.state.filters}
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='fishing'
                                filterValue={true}
                                description='Fishing'
                                iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/fishing.png' />
                            <Button
                                // filterState={this.state.filters}
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='wildlife'
                                filterValue={true}
                                description='Wildlife watching'
                                iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/dove.png' />
                        </div>
                    </li>
                </div>
                <div className="spot-dropdown">
                    <li><button onClick={() => showDropdown('spot-access-filter')} className="dropbtn" >Accessibility</button>
                        <div id="spot-access-filter" className="spot-filter-items">
                            <Button
                                // filterState={this.state.filters}
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='tent'
                                filterValue={true}
                                description='Tent'
                                iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/tent.png' />
                            <Button
                                // filterState={this.state.filters}
                                updateFilter={this.props.updateFilter}
                                removeFilter={this.props.removeFilter}
                                filterType='parking'
                                filterValue={true}
                                description='Parking'
                                iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/parking.png' />
                        </div>
                    </li>
                </div>
                <div className="spot-dropdown">
                    <li><button onClick={this.handleClearFilters}>Clear filters</button></li>
                </div>
            </ul>
            <div className="spot-search-main">
                <div className="spot-index">
                    <div className="spot-index-description">
                        <header>Colorado</header>
                        <h3>The best camping in Colorado.</h3>
                        <h5>Where else can you find ancestral cliff dwellings, arid desert, river canyons, and snow-covered Rocky Mountains?</h5>
                    </div>
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














