import React from 'react';
import ReactDOMServer from 'react-dom/server'

const marker_icon = new google.maps.MarkerImage(
    "https://we-camp-seeds.s3.us-east-2.amazonaws.com/hipcamp+google+map+marker.png",
    null, /* size is determined at runtime */
    null, /* origin is 0,0 */
    null, /* anchor is bottom center of the scaled image */
    new google.maps.Size(50, 50)
);

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

        const infoWindowContent = (
            <div id="markerContent">
                <div id="marker-spot-image">
                    <img src={spot.photoUrl} />
                </div>
                <div id="marker-spot-detail">
                    <div id="marker-spot-title">{spot.title}</div>
                    <div id="marker-spot-price">${spot.price}/night</div>
                </div>
            </div>
        )

        const position = new google.maps.LatLng(spot.lat, spot.lng);


        // const infowindow = new google.maps.InfoWindow({
        //     content: "<div style='float:left'><img src='spot.photoUrl'></div><div style='float:right; padding: 10px;'><b>Title</b><br/>123 Address<br/> City,Country</div>"
        // });

        const infowindow = new window.google.maps.InfoWindow({
            content: ""
        });

        const marker = new google.maps.Marker({
            position,
            map: this.map,
            spotId: spot.id,
            icon: marker_icon
        });

        marker.addListener('click', () => this.handleClick(spot));
        this.markers[marker.spotId] = marker;

        marker.addListener('mouseover', () => {
            const content = ReactDOMServer.renderToString(infoWindowContent);
            infowindow.setContent(content)
            infowindow.open(this.map, marker);
        });

        marker.addListener('mouseout', function () {
            infowindow.close();
        });

    }

    removeMarker(marker) {
        this.markers[marker.spotId].setMap(null);
        delete this.markers[marker.spotId];
    }

}

