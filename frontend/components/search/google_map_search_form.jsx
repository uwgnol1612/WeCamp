import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { withRouter } from 'react-router-dom'


class MapSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            geoLoc: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToSpotIndex = this.navigateToSpotIndex.bind(this);
    }

    navigateToSpotIndex() {
        const url = '/spots'
        this.props.history.push(url);
    }


    handleSubmit(e){
        // debugger
        e.preventDefault();
        this.props.receiveLocation(this.state);
        this.navigateToSpotIndex();

    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    }


    render() {
        return (
        <form className='search-bar-input' onSubmit={this.handleSubmit}>
            <span className="search-bar-icon-nav"><FontAwesomeIcon icon={faSearch} /></span>
            <input onChange={this.update('geoLoc')} placeholder='Try Denver...' type="text"/>
        </form>
        )
    }
}

export default withRouter(MapSearch);

