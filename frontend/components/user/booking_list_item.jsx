import React from 'react';
import { Link } from 'react-router-dom'

const BookingListItem = (props) => {

    const spot = props.spots[props.booking.spot_id]
    const spotImgUrl = spot.photoUrls[0]
    const checkInDate = new Date(props.booking.check_in).toDateString();
    const checkOutDate = new Date(props.booking.check_out).toDateString();

    return (
        <li className='booking-list-item'>
            <Link to={`/spots/${props.booking.spot_id}`}>
                <h3>{spot.title}</h3>
            </Link>
                <div className='user-booking-image'>
                    <img src={spotImgUrl} alt=""/>
                </div>
                <div className='user-booking-details'>
                    <p><span>Check In:</span>{checkInDate}</p>
                    <p><span>Check Out:</span>{checkOutDate}</p>
                    <p><span>Number of Guests:</span>{props.booking.guest_number}</p>
                    <p><span>Total Price:</span>${props.booking.total_price}</p>
                </div>
                <button onClick={()=> props.deleteBooking(props.booking.id)}className='booking-delete-btn'></button>
        </li>
    )
}


export default BookingListItem;