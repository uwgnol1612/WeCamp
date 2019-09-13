import React from 'react';
import { Link } from 'react-router-dom'

const BookingListItem = (props) => {

    let spotImgUrl;
    let spotTitle;
    props.spots.forEach(spot => {
        if (props.booking.spot_id === spot.id) {
            spotImgUrl = spot.photoUrls[1]
            spotTitle = spot.title
        }
    })

    const checkInDate = new Date(props.booking.check_in).toDateString();
    const checkOutDate = new Date(props.booking.check_out).toDateString();

    return (
        <li className='booking-list-item'>
            <Link to={`/spots/${props.booking.spot_id}`}>
                <h3>{spotTitle}</h3>
            </Link>
            <div className='user-booking-pan'>
                <div className='user-booking-image'>
                    <img src={spotImgUrl} alt=""/>
                </div>
                <div className='user-booking-details'>
                    <p><span>Check In:</span>{checkInDate}</p>
                    <p><span>Check Out:</span>{checkOutDate}</p>
                    <p><span>Number of Guests:</span>{props.booking.guest_number}</p>
                    <p><span>Total Price:</span>${props.booking.total_price}</p>
                </div>
            </div>
            <div className='booking-delete-btn'>
            <button onClick={() => props.deleteBooking(props.booking.id)} 
                    >Cancel Booking
            </button>
            </div>
        </li>
    )
}


export default BookingListItem;