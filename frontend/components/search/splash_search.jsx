import React from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import "react-day-picker/lib/style.css"

class SplashSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            geoLoc: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
       
    }

    componentDidMount() {
        let searchInput = document.getElementById("geosearch-input");
        let autocomplete = new google.maps.places.Autocomplete(searchInput);

        let geoLocation;
        let that = this;

        autocomplete.addListener('place_changed', () => {
            let address = autocomplete.getPlace().formatted_address;
            geoLocation = address ? address : autocomplete.getPlace().name 
            that.setState({
                geoLoc: geoLocation
            })

        });
    }


    handleInput(e) {
        this.setState({
            geoLoc: e.target.value
        })
    }

    navigateToSpotIndex() {
        const url = '/spots'
        this.props.history.push(url);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveLocation(this.state);
        this.navigateToSpotIndex();
    }

    render() {
        return (
            <div className="splash-search-container">
                <form className='geo-input' onSubmit={this.handleSubmit}>
                    <span className="search-bar-icon"><FontAwesomeIcon icon={faSearch} /></span>
                    <input
                        id='geosearch-input'
                        placeholder='Find camping near...'
                        type="search"
                        value={this.state.geoLoc}
                        onChange={this.handleInput}
                    />
                    <div className='date-input'>
                        <span className="date-search-icon"><FontAwesomeIcon icon={faCalendarAlt} /></span>
                        <DayPickerInput
                            placeholder='Enter Dates'
                            dayPickerProps={{
                                disabledDays: { before: new Date() },
                            }}
                        />
                    </div>
                    <button className='spash-search-btn' id='search-link'></button>
                </form>
            </div>
        )
        
    }
}

export default withRouter(SplashSearch);