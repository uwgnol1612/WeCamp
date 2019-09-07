import React from 'react'

import SpotIndex from './spot_index';
import SpotMap from './spot_map';
import Button from './filter_button';



const Search = ({ spots, updateFilter, removeFilter, removeAllFilters }) => (

    <div className="spot-search-section">
        <ul className="spot-filters-container">
            <div className="spot-dropdown">
                <li><button onClick={()=> showDropdown('spot-group-filter')} className="dropbtn" >Group size</button>
                    <div id="spot-group-filter" className="spot-filter-items">
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='groupSize'
                            filterValue= {5}
                            description='5+ Campers' />
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='groupSize'
                            filterValue={10}
                            description='10+ Campers' />
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
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
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='price'
                            filterValue={50}
                            description='Under $50' />
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='price'
                            filterValue={100}
                            description='Under $100' />
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
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
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='pets'
                            filterValue={true}
                            description='Pets allowed'/>
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='toilet'
                            filterValue={true}
                            description='Toilets'/>
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='campfire'
                            filterValue={true}
                            description='Campfires'/>
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='water'
                            filterValue={true}
                            description='Water'/>
                    </div>
                </li>
            </div>
            <div className="spot-dropdown">
                <li><button onClick={() => showDropdown('spot-activity-filter')} className="dropbtn" >Activities</button>
                    <div id="spot-activity-filter" className="spot-filter-items">
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='hiking'
                            filterValue={true}
                            description='Hiking' />
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='swimming'
                            filterValue={true}
                            description='Swimming' />
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='fishing'
                            filterValue={true}
                            description='Fishing' />
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='wildlife'
                            filterValue={true}
                            description='Wildlife watching' />
                    </div>
                </li>
            </div>
            <div className="spot-dropdown">
                <li><button onClick={() => showDropdown('spot-access-filter')} className="dropbtn" >Accessibility</button>
                    <div id="spot-access-filter" className="spot-filter-items">
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='tent'
                            filterValue={true}
                            description='Tent' />
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='parking'
                            filterValue={true}
                            description='Parking' />
                    </div>
                </li>
            </div>
            <li><button onClick={removeAllFilters}>Clear filters</button></li>
        </ul>
        <div className="spot-search-main">
            <div className="spot-index">
                <div className="spot-index-description">
                    <header>Colorado</header>
                    <h3>The best camping in Colorado.</h3>
                    <h5>Where else can you find ancestral cliff dwellings, arid desert, river canyons, and snow-covered Rocky Mountains?</h5>
                </div>
                <SpotIndex spots={spots} />
            </div>
            <div className="spot-map">
                <SpotMap
                    spots={spots}
                    updateFilter={updateFilter}
                    singleSpot={false}
                />
            </div>
        </div>

    </div>       

);

export default Search;















