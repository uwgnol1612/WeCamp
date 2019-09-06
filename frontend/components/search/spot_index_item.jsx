import React from 'react';
import { Link } from 'react-router-dom';

class SpotIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const tentIcon = this.props.spot.tent ? <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/cabin.png" /> : <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/tent.png" /> 

        return (
        <div className="spot-index-item">
            <div className="spot-photo">
            <Link to={`/spots/${this.props.spot.id}`}>
                <img src={this.props.spot.photoUrl} alt=""/>
            </Link>
            </div>
            <div className="spot-details">
                <div className= "spot-detail-1">
                    <h4>{this.props.spot.title}</h4>
                    <span className="tent-icon">{tentIcon}</span>
                </div>
                <div className= "spot-detail-2">
                    <span>Reviews..</span>
                    <h5>${this.props.spot.price}/night</h5>
                </div>
            </div>

        </div>
        )
    }
}

export default SpotIndexItem;