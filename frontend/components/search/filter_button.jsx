import React from 'react';

class Button extends React.Component{
    constructor(props) {
        super(props)
        this.state = { 
            buttonState: 'unclicked' 
        } 
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const newButtonState = this.state.buttonState === 'unclicked' ? 'clicked' : 'unclicked'
        this.setState({
            buttonState: newButtonState
        })
        if (this.state.buttonState === 'unclicked') {
            this.props.updateFilter(this.props.filterType, this.props.filterValue); 
        } else {
            this.props.removeFilter(this.props.filterType); 
        }
    }

    render() {
        let btnStyle = {
            backgroundColor: 'white',
            color: 'black'
        }
        if (this.state.buttonState === 'clicked') {
            btnStyle = {
                backgroundColor: '#f3fbfb',
                color: '#40d9ac',
                border: '1px solid #40d9ac'
            }
        }
        let imageUrl = "";
        if (this.props.iconUrl) {
            imageUrl = this.props.iconUrl
        } 

        return (
                <button 
                    style={btnStyle}
                    onClick={this.handleClick}
                    className='filter-button'
            ><img src={imageUrl} alt=""/>{this.props.description}</button>
        )
    }




}

export default Button;