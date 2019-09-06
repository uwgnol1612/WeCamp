export default class MarkerManager {

    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(spots) {
        const spotsObj = {};
        spots.forEach(spot => spotsObj[spot.id] = spot);

        spots.filter(spot => !this.markers[spot.id]).forEach(newSpot => this.createMarkerFromSpot(newSpot, this.handleClick))
        Object.keys(this.markers).filter(spotId => !spotsObj[spotId]).forEach((spotId) => this.removeMarker(this.markers[spotId]));
    }

    createMarkerFromSpot(spot) {
        // const position = new google.maps.LatLng(spot.lat, spot.lng);

        // const marker = new google.maps.Marker({
        //     position,
        //     map: this.map,
        //     spotId: spot.id
        // });

        const marker = new mapIcons.Marker({
            map: this.map,
            position: new google.maps.LatLng(spot.lat, spot.lng),
            icon: {
                path: MAP_PIN,
                fillColor: '#00CCBB',
                fillOpacity: 1,
                strokeColor: '',
                strokeWeight: 0,
                
            },
            map_icon_label: '<span class="map-icon map-icon-campground"></span>'
           
        });


        marker.addListener('click', () => this.handleClick(spot));
        this.markers[marker.spotId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.spotId].setMap(null);
        delete this.markers[marker.spotId];
    }

}