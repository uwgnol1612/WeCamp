import React from 'react';
import { formatDate } from '../../util/date_util'

import BookingListContainer from './booking_list_container';
import ReviewListContainer from './review_list_container';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMapMarkerAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';


class UserShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bookingsPanOpen: true
        }
        this.openBookingPan = this.openBookingPan.bind(this);
        this.openReviewPan = this.openReviewPan.bind(this);
    }

    componentDidMount() {
        this.props.fetchSpots();
        // this.props.fetchBookings();
        this.props.requestUser(this.props.match.params.userId);
    }


    openBookingPan(e) {
        e.preventDefault();
        this.setState({
            bookingsPanOpen: true
        })
    }

    openReviewPan(e) {
        e.preventDefault();
        this.setState({
            bookingsPanOpen: false
        })
    }

    render() {

        // if (!this.props.user.reviews) return null;

        const pan = this.state.bookingsPanOpen ? <BookingListContainer /> : <ReviewListContainer />

        const bookingNum = this.props.bookings.length
        const reviewNum =this.props.reviews.length
        const formatedDate = formatDate(this.props.user.created_at);

        return (
            <div className='user-profile-container'>
                <aside className='user-detail'>
                    <div className='user-bio'>
                        <div className='user-name'>
                            <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/camplogo.png" alt="avatar"/>
                            <h3>{this.props.user.username}</h3>
                        </div>
                        <div className='user-time'>
                            <span className='heart-icon'><FontAwesomeIcon icon={faHeart} /></span>
                            <p>Hipcamper since {formatedDate}</p>
                        </div>
                        <div className='user-geo'>
                            <span className='pin-icon'><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                            <p>Where are you from?</p>
                        </div>
                        <div className='user-intro'>
                            <span className='intro'>Intro:</span>
                            <p>Introduce yourself to the community! Add a short bio...</p>
                        </div>
                    </div>
                    <div className='user-pannel'>
                        <div className='hipcamper'>Trusted Hipcamper</div>
                        <div className='user-email'>
                            <span className='check-icon'><FontAwesomeIcon icon={faCheckCircle} /></span>
                            <p>Email address</p>
                        </div>
                        <div className='facebook'>
                            <p>Facebook</p>
                            <button>+ Connect</button>
                        </div>
                    </div>

                </aside>
                <div className='bookings-and-reviews'>
                    <div className= 'bookings-and-reviews-header'>
                       
                        <div className='user-bookings'>
                            <h3>{bookingNum}</h3>
                            <a href="#" onClick={this.openBookingPan}>Trips</a>
                        </div>
                       
                        <div className='user-reviews'>
                            <h3>{reviewNum}</h3>
                            <a href="#" onClick={this.openReviewPan}>Reviews</a>
                        </div>
                    </div>
                    {pan}
                </div>
              
            </div>
        )
    }
}

export default UserShow;