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
                    <li><button>Amenities</button></li>
                    <li><button>Activities</button></li>
                    <li><button>Group size</button></li>
                    <li><button>Pricing</button></li>
                    <li><button>Accessibility</button></li>
                    <li><button>Clear filters</button></li>
                </ul>
                <div className="spot-search-main">
                    <div className="spot-index">
                        {this.props.spots.map(spot =>
                        <SpotIndexItem spot={spot} key={spot.id} />)}
                    </div>
                    <div id="map-container">
                    </div>
                  
                </div>
            </div>

        )

    }
}

export default SpotIndex;