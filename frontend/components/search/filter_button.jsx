import React from 'react';

class Button extends React.Component{
    constructor(props) {
        super(props)
        this.state = { 
            buttonState: this.props.buttonState
        } 
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
  
        if (this.state.buttonState === 'unclicked') {
            this.props.updateFilter(this.props.filterType, this.props.filterValue); 
        } else {
            this.props.removeFilter(this.props.filterType); 
        }
        const newButtonState = this.state.buttonState === 'unclicked' ? 'clicked' : 'unclicked'
        this.setState({
            buttonState: newButtonState
        })

    }




}

export default Button;