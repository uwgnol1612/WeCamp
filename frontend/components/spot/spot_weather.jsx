import React from 'react';

class SpotVibes extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            elevation: "",
            temperature: "",
            weather: "",
            humidity: "",
            speed: ""

        }
    }

    componentDidMount() {
        const lat = this.props.spot.lat
        const lng = this.props.spot.lng

        $.ajax({
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=dec1eafba244a000ea1ad73938bc1087&units=imperial`
        }).then(res => this.handleWeatherRes(res))

        this.getElevation({lat: lat, lng: lng}).then(res => this.setState({ elevation: Math.floor(res * 3.28) }))

    }

    getElevation(latLng) {
        return new Promise((resolve, rejection) => {
            const elevator = new google.maps.ElevationService;
            elevator.getElevationForLocations({
                'locations': [latLng]}, function(results, status) {
                    if (status === 'OK') {
                        if (results[0]) {
                            resolve(results[0].elevation)
                        }

                    }
                })
        })

    }

    handleWeatherRes(res) {
        const temperature = Math.floor(res.main.temp);
        const humidity = res.main.humidity;
        const weather = res.weather[0].description.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
        const speed = res.wind.speed

        this.setState({
            temperature,
            weather,
            humidity,
            speed
        })
    }

    render() {
        return (
            <div className="spot-vibes-container">
                <h1>The vibe at {this.props.spot.title}</h1>
                <div className="spot-vibes-item">
                    <h1>{this.state.elevation}ft</h1>
                    <p>Listing's elevation</p>
                </div>
                <div className="spot-vibes-item">
                    <h1>{this.state.temperature}</h1>
                    <p>{this.state.weather}</p>
                </div>
                <div className="spot-vibes-item">
                    <h1>{this.state.humidity}</h1>
                    <p>Humidity</p>
                </div>
                <div className="spot-vibes-item">
                    <h1>{this.state.speed}km/hr</h1>
                    <p>Wind</p>
                </div>
            </div>

        )
        

    }
}

export default SpotVibes;