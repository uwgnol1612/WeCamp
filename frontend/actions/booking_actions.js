export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS'

import * as bookingApiUtil from '../util/booking_api_util'


export const receiveAllBookings = (bookings) => ({
    type: RECEIVE_ALL_BOOKINGS,
    bookings
})

export const receiveBooking = (booking) => ({
    type: RECEIVE_BOOKING,
    booking
})


export const removeBooking = (booking) => ({
    type: REMOVE_BOOKING,
    bookingId: booking.id
})


export const receiveBookingErrors = (errors) => ({
    type: RECEIVE_BOOKING_ERRORS,
    errors
})



export const fetchBookings = () => dispatch => {
    return bookingApiUtil.fetchBookings().then((bookings) => dispatch(receiveAllBookings(bookings)))
}

export const fetchBooking = (id) => dispatch => {
    return bookingApiUtil.fetchBooking(id).then((booking) => dispatch(receiveBooking(booking)))
}

export const createBooking = (booking) => dispatch => {
    return bookingApiUtil.createBooking(booking).then(
        booking => dispatch(receiveBooking (booking)),
        err => dispatch(receiveBookingErrors(err.responseJSON))
    )
}

export const deleteBooking = (id) => dispatch => {
    return bookingApiUtil.deleteBooking(id).then((booking) => dispatch(removeBooking(booking)))
}