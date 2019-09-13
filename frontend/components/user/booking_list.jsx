import React from 'react';
import BookingListItem from './booking_list_item'

class BookingList extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchBookings();
    }

    render() {

        // if (Object.keys(this.props.spots).length === 1 || Object.keys(this.props.spots).length === 0) return null;
        if (this.props.bookings.length === 0) {
            return <div className='no-booking-list'>No past trips. Let's get you outside!</div>;

        } else {
            const bookings = this.props.bookings.map((booking, i) =>
                <BookingListItem
                    booking={booking}
                    spots={this.props.spots}
                    key={i}
                    deleteBooking={this.props.deleteBooking} />
            )
            return (
                <div>
                    <ul className='booking-list'>
                        {bookings}
                    </ul>
                </div>
            )
        }
 
    }

}

export default BookingList;