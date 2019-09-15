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
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.spots);

    }

    componentDidUpdate() {
        if (this.props.geoLoc) {
            this.geoSearch();
            this.props.resetgeoLoc();
        } 

        this.MarkerManager.updateMarkers(this.props.spots);

    }


    geoSearch() {
        const geoCoder = new google.maps.Geocoder();
        
        geoCoder.geocode( {address: this.props.geoLoc } , (results, status) => {
            if (status === 'OK') {
                this.map.setCenter(results[0].geometry.location);
            }
        })
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