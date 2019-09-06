import React from 'react';
import MarkerManager from '../../util/marker_manager'
import { withRouter } from 'react-router-dom';

const mapOptions = {
    center: { lat: 38.881638, lng: -107.107038 },
    zoom: 7,
    gestureHandling: 'greedy',
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.TERRAIN]
    },
    mapTypeId: google.maps.MapTypeId.TERRAIN
};


class SpotMap extends React.Component {

    componentDidMount() {
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));

        if (this.props.singleSpot) {
            this.props.fetchSpot(this.props.spotId);
        } else {
            this.registerListeners();
            this.MarkerManager.updateMarkers(this.props.spots);
        }
    }

    componentDidUpdate() {
        if (this.props.singleSpot) {
            const targetSpotKey = Object.keys(this.props.spots)[0];
            const targetSpot = this.props.spots[targetSpotKey];
            this.MarkerManager.updateMarkers([targetSpot]);
        } else {
            this.MarkerManager.updateMarkers(this.props.spots);
        }
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter('bounds', bounds);
        });
    }

    handleMarkerClick(spot) {
        this.props.history.push(`/spots/${spot.id}`);
    }

    render() {
        return (
            <div id="map-container" ref={map => this.mapNode = map}>
            </div>
        )
    }
            

}
export default withRouter(SpotMap);