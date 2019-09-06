import React from 'react';
import SpotIndexItem from './spot_index_item'


class SpotIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="spot-index-items">
                {this.props.spots.map(spot =>
                <SpotIndexItem spot={spot} key={spot.id} />)}
            </div>
        )

    }
}

export default SpotIndex;