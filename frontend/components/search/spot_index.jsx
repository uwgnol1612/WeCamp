import React from 'react';
import SpotIndexItem from './spot_index_item'


class SpotIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {

        if (this.props.spots.length === 0) {
            return <div className='no-search-results'>No spots match your search...</div>
        }

        return (
            <div>
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
        )

    }
}

export default SpotIndex;