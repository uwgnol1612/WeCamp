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
                            description='Under $50'/>
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
                            description='Pets allowed'
                            iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/pet-friendly.png'/>
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='toilet'
                            filterValue={true}
                            description='Toilets'
                            iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/toilet-paper.png'/>
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='campfire'
                            filterValue={true}
                            description='Campfires'
                            iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/bonfire.png'/>
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
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
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='hiking'
                            filterValue={true}
                            description='Hiking'
                            iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/hiking.png' />
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='swimming'
                            filterValue={true}
                            description='Swimming'
                            iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/swimming.png' />
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='fishing'
                            filterValue={true}
                            description='Fishing'
                            iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/fishing.png' />
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
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
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='tent'
                            filterValue={true}
                            description='Tent'
                            iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/tent.png' />
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='parking'
                            filterValue={true}
                            description='Parking'
                            iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/parking.png' />
                    </div>
                </li>
            </div>
            <div className="spot-dropdown">
                <li><button onClick={removeAllFilters}>Clear filters</button></li>
            </div>
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















