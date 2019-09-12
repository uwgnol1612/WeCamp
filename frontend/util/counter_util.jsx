import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            max: this.props.maxNum
        }
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateGuestNum(this.state.count)
    }


    increaseCount(){
        if (this.state.count < this.state.max) {
            this.setState({
                count: this.state.count + 1
            })
        } 
    }

    decreaseCount() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        } 
    }

    render() {
        return (
        <form className='guest-counter' onSubmit={this.handleSubmit}>
            <button onClick={() => this.decreaseCount()}>&#8722;</button>
                <input readOnly value={this.state.count}></input>
            <button onClick={() => this.increaseCount()}>&#43;</button>
        </form>
        )
    }

}

export default Counter;