import React from 'react';
import BookingListItem from './booking_list_item'

class BookingList extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchSpots();
    }

    render() {
        
        if (Object.keys(this.props.spots) === 0) return null;

        const bookings = this.props.bookings.map(booking => 
            <BookingListItem
                booking={booking}
                spots={this.props.spots}
                key={booking.id} 
                deleteBooking={this.props.deleteBooking}/>
            )

        return (
            <div>
                <ul>
                    {bookings}
                </ul>
            </div>
        )
    }

}

export default BookingList;