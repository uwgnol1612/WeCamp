import React from 'react';
import SpotIndexItem from './spot_index_item'


class SpotIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchSpots();
    }

    render() {
        return (
            <div className="spot-search-section">
                <ul className="spot-filters-container">
                    <li><button>Group size</button></li>
                    <li><button>Pricing</button></li>
                    <li><button>Amenities</button></li>
                    <li><button>Activities</button></li>
                    <li><button>Accessibility</button></li>
                    <li><button>Clear filters</button></li>
                </ul>
                <div className="spot-search-main">
                    <div className="spot-index">
                        <div className="spot-index-description">
                            <header>Colorado</header>
                            <h3>The best camping in Colorado.</h3>
                            <h5>Where else can you find ancestral cliff dwellings, arid desert, river canyons, and snow-covered Rocky Mountains?</h5>
                        </div>
                        <div className="spot-index-items">
                        {this.props.spots.map(spot =>
                        <SpotIndexItem spot={spot} key={spot.id} />)}
                        </div>
                    </div>
                    <div id="map-container">
                    </div>
                  
                </div>
            </div>

        )

    }
}

export default SpotIndex;