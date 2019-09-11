import React from 'react';
import { withRouter } from 'react-router-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Counter from '../../util/counter_util'

class BookingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkIn: undefined,
            checkOut: undefined,
            totalPrice: 0,
            guestNumber: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToUserShow = this.navigateToUserShow.bind(this);
        this.handleCheckInDayChange = this.handleCheckInDayChange.bind(this);
        this.handleCheckOutDayChange = this.handleCheckOutDayChange.bind(this);
        this.updateGuestNum = this.updateGuestNum.bind(this);

    }

    componentDidMount() {
        this.props.fetchSpot(this.props.spot.id);
    }

    navigateToUserShow() {
        const url = `/users/${this.props.currentUserId}`
        this.props.history.push(url);
    }

    handleSubmit(e) {

        e.preventDefault();
        const spotId = this.props.spot.id
        const booking = Object.assign({}, this.state, {
            spot_id: spotId
        });

        if (!this.props.currentUserId) {
            this.props.openModal('login')
        } else {
            this.props.createBooking(booking).then(this.navigateToUserShow);
        }
    }

    updateGuestNum(num) {
        this.setState({
            guestNumber: num
        })
    }


    handleCheckInDayChange(day) {
        this.setState({
            checkIn: day
        })
    }

    handleCheckOutDayChange(day) {
        this.setState({
            checkOut: day
        })
    }

    updatePrice() {
        return e => (
            this.setState({
                totalPrice: e.target.value
            })
        )

    }


    render() {
        if (!this.props.spot) return null;
        const errors = this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)

        const checkInDate = Date.parse(this.state.checkIn)
        const checkOutDate = Date.parse(this.state.CheckOut)
        const days = checkOutDate - checkInDate;
        const price = days * this.props.spot.price

        return (
            <div className="booking-form-container">
                <form className="booking_widget">
                    <div className ="booking-banner">
                        <h2>${this.props.spot.price}</h2>
                        <span>per night</span>
                    </div>
                    <div className="booking-main">
                        <div className="dates-guests">
                            <div className="check-in">
                                <label>Check in</label>
                                <DayPickerInput
                                    placeholder='Select date'
                                    onDayChange={day => this.handleCheckInDayChange(day)}

                                    dayPickerProps={{
                                        disabledDays: {before: new Date()}
                                    }}
                                     
                                     
                                />
                            </div>

                            <div className="check-out">
                                <label>Check out</label>
                                <DayPickerInput
                                    dayPickerProps={{
                                        disabledDays: { before: new Date(this.state.checkIn) },
                                        backgroundColor: '#40d9ac'
                                    }}

                                    placeholder='Select date' 
                                    onDayChange={ day => this.handleCheckOutDayChange(day) } 
                                                                 
                                />
                            </div>
                            <div className="guest-number">
                                <label>Guests</label>
                                <Counter 
                                    updateGuestNum={this.updateGuestNum}
                                    maxNum={this.props.spot.max_capacity}
                                />
                            </div>
                        </div>
                        <div className='total-price'>
                            <label>Subtotal</label>
                            <p id='price'>{price}</p>
                        </div>
                        <div className="booking-submit">
                            <buttton id='booking-submit-btn' onClick={this.handleSubmit}>Book</buttton>
                        </div>
                    </div>
                </form>
                <div className="booking-errors-messages">
                    <ul>
                        {errors}
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(BookingForm);