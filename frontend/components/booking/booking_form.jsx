import React from 'react';
import { withRouter } from 'react-router-dom';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
import Counter from '../../util/counter_util'

// import "react-day-picker/lib/style.css"

// import { formatDate, parseDate } from 'react-day-picker/moment';
// import 'moment/locale/it';


class BookingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            check_in: undefined,
            check_out: undefined,
            total_price: 0,
            guest_number: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToUserShow = this.navigateToUserShow.bind(this);
        this.handleCheckInDayChange = this.handleCheckInDayChange.bind(this);
        this.handleCheckOutDayChange = this.handleCheckOutDayChange.bind(this);
        this.updateGuestNum = this.updateGuestNum.bind(this);

    }

    // componentDidMount() {
    //     this.props.fetchSpot(this.props.spot.id);
    // }


    navigateToUserShow() {
        const url = `/users/${this.props.currentUserId}`
        this.props.history.push(url);
    }

    handleSubmit(e) {

        e.preventDefault();
        const spotId = this.props.spot.id


        let totalPrice;

        if (!(this.state.check_in && this.state.check_out)) {
            totalPrice = 0
        } else {
            const checkInDate = Date.parse(this.state.check_in)
            const checkOutDate = Date.parse(this.state.check_out)
            const days = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
            totalPrice = days * this.props.spot.price
        }

        const booking = Object.assign({}, this.state, {
            spot_id: spotId,
            total_price: totalPrice
        });

        if (!this.props.currentUserId) {
            this.props.openModal('login')
        } else {
            this.props.createBooking(booking).then(this.navigateToUserShow);
        }
    }

    updateGuestNum(num) {
        this.setState({
            guest_number: num
        })
    }


    handleCheckInDayChange(day) {
        this.setState({
            check_in: day.toLocaleDateString()
        })
    }

    handleCheckOutDayChange(day) {
        this.setState({
            check_out: day.toLocaleDateString()
        })
    }


    render() {
        if (!this.props.spot) return null;
        const errors = this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)

        let totalPrice;

        if (!(this.state.check_in && this.state.check_out)) {
            totalPrice = 0
        } else {
            const checkInDate = Date.parse(this.state.check_in)
            const checkOutDate = Date.parse(this.state.check_out)
            const days = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
            totalPrice = days * this.props.spot.price
        }
    
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
                                
                                {/* <DayPickerInput
                                    placeholder='Select date'
                                    onDayChange={day => this.handleCheckInDayChange(day)}
                                    formatDate={formatDate}
                                    parseDate={parseDate}

                                    dayPickerProps={{
                                        disabledDays: { before: new Date() },
                                    }}
                                                                        
                                /> */}
                            </div>

                            <div className="check-out">
                                <label>Check out</label>
                                {/* <DayPickerInput
                                    placeholder='Select date'
                                    onDayChange={day => this.handleCheckOutDayChange(day)}
                                    formatDate={formatDate}
                                    parseDate={parseDate} 

                                    dayPickerProps={{
                                        disabledDays: { before: new Date(this.state.check_in) },
                                       
                                    }}

                                /> */}
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
                            <p id='price'>${totalPrice}</p>
                        </div>
                        <div className="booking-submit">
                            <button id='booking-submit-btn' onClick={this.handleSubmit}>Book</button>
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