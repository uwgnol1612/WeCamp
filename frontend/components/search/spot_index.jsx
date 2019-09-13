import React from 'react';
import SpotIndexItem from './spot_index_item'


class SpotIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {

        if (this.props.spots.length === 0) {
            return <div className='no-search-results'>Oops! No spots match your search...</div>
        }

        return (
            <div className="spot-index-items">
                {this.props.spots.map(spot =>
                <SpotIndexItem spot={spot} key={spot.id} />)}
            </div>
        )

    }
}

export default SpotIndex;