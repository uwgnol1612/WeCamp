import React from 'react';
import { formatDate } from '../../util/date_util'
import BookingListContainer from './booking_list_container'
import ReviewListContainer from './review_list_container'

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
        this.props.requestUsers();
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

        if (!this.props.user.reviews) return null;

        const pan = this.state.bookingsPanOpen ? <BookingListContainer /> : <ReviewListContainer />
        // debugger

        let bookingNum;
        if (!this.props.user.bookings) {
            bookingNum = 0
        } else {
            bookingNum = Object.values(this.props.user.bookings).length
        }

        const formatedDate = formatDate(this.props.user.created_at);
        const reviewNum = Object.values(this.props.user.reviews).length

        return (
            <div className='user-profile-container'>
                <aside className='user-detail'>
                    <div className='user-bio'>
                        <div className='user-name'>
                            <img src="" alt="avatar"/>
                            <h3>{this.props.user.username}</h3>
                        </div>
                        <div className='user-time'>
                            <span>heart-icon</span>
                            <p>Hipcamper since {formatedDate}</p>
                        </div>
                        <div className='user-geo'>
                            <span>location-icon</span>
                            <p>Where are you from?</p>
                        </div>
                        <div className='user-intro'>
                            <span>Intro:</span>
                            <p>Introduce yourself to the community! Add a short bio...</p>
                        </div>
                    </div>
                    <div className='user-pannel'>
                        <div className='hipcamper'>Trusted Hipcamper</div>
                        <div className='user-email'>
                            <span>icon</span>
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
                </div>
                {pan}
            </div>
        )
    }
}

export default UserShow;