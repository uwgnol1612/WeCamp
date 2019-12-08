import React from 'react';
import SpotSlider from './spot_slider';
import ReviewListItemContainer from './review_list_item_container'
import BookingFormContainer from '../booking/booking_form_container'

class SpotShow extends React.Component {
    constructor(props) {
        super(props)
        this.navigateToReviewForm = this.navigateToReviewForm.bind(this);
    }

    componentDidMount() {
        this.props.fetchReviews();
        this.props.requestUsers();
        this.props.fetchSpot(this.props.match.params.spotId);

    }

    navigateToReviewForm() {

        if (!this.props.currentUser) {
            this.props.openModal('login')
        } else {
            const url = `/spots/${this.props.match.params.spotId}/review/new`
            this.props.history.push(url);
        }
    }

    render() {
        if (!this.props.spot) return null;

        const campIconUrl = this.props.spot.tent ? 'https://we-camp-seeds.s3.us-east-2.amazonaws.com/cabin.png' : 'https://we-camp-seeds.s3.us-east-2.amazonaws.com/no-camping.png'
        const campText = this.props.spot.tent ? 'Cabin provided' : 'Bring your own tents'

        const campfireIconUrl = this.props.spot.campfire ? 'https://we-camp-seeds.s3.us-east-2.amazonaws.com/bonfire.png' : 'https://we-camp-seeds.s3.us-east-2.amazonaws.com/no-fire.png'
        const campfireText = this.props.spot.campfire ? 'Campfires allowed' : 'No campfire'

        const toiletIconUrl = this.props.spot.toilet ? 'https://we-camp-seeds.s3.us-east-2.amazonaws.com/toilet.png' : 'https://we-camp-seeds.s3.us-east-2.amazonaws.com/no-toileting.png'
        const toiletText = this.props.spot.toilet ? 'Toilet available' : 'No toilet'

        const petsIconUrl = this.props.spot.pets ? 'https://we-camp-seeds.s3.us-east-2.amazonaws.com/pet-friendly.png' : 'https://we-camp-seeds.s3.us-east-2.amazonaws.com/no-pets.png'
        const petsText = this.props.spot.pets ? 'Pets allowed' : 'No pets'

        const waterIconUrl = this.props.spot.water ? 'https://we-camp-seeds.s3.us-east-2.amazonaws.com/water.png' : 'https://we-camp-seeds.s3.us-east-2.amazonaws.com/no-water.png'
        const waterText = this.props.spot.water ? 'Portable water available' : 'No portable water'

        const checkIn = parseInt(this.props.spot.check_in) > 12 ? (parseInt(this.props.spot.check_in) - 12).toString() + 'PM' : parseInt(this.props.spot.check_in).toString() + 'AM'
        const checkOut = parseInt(this.props.spot.check_out) > 12 ? (parseInt(this.props.spot.check_out) - 12).toString() + 'PM' : parseInt(this.props.spot.check_out).toString() + 'AM'

        
        const activites = []
        if (this.props.spot.hiking) {
            activites.push(<SpotActivity activityUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/hiking.png'  activityText='Hiking'/>)
        }
        if (this.props.spot.swimming) {
            activites.push(<SpotActivity activityUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/swimming.png' activityText='Swimming' />)
        } 
        if (this.props.spot.fishing) {
            activites.push(<SpotActivity activityUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/fishing.png' activityText='Fishing' />)
        }
        if (this.props.spot.wildlife) {
            activites.push(<SpotActivity activityUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/dove.png' activityText='Wildlife watching' />)
        }

  
        return (
            <div className='spot-show-container'>
                <div className='slideshow-container'>
                    <SpotSlider imgUrls={this.props.spot.photoUrls} />
                </div>

                <div className= 'spot-show-main'>
                    <div className= 'spot-show'>
                        <div className='spot-div'>
                            <h1>{this.props.spot.title}</h1>
                        </div>
                        <div className='spot-div' id='spot-div-2'>
                            <div className='spot-host'>
                                <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/camplogo.png" alt="avatar"/>
                                <div className='host-detail'>
                                    <p>Hosted By</p>
                                    <h5>Long M.</h5>
                                </div>
                            </div>
                            <p className='spot-description'>{this.props.spot.description}</p>
                        </div>
                        <div className='spot-section'>
                            <div className='spot-subsection'>
                                <h3>Campsite area</h3>
                                <ul className='spot-subsection-info'>
                                    <li>
                                        <img src={campIconUrl} alt=""/>
                                        <p>{campText}</p>
                                    </li>
                                    <li>
                                        <img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/tent2.png' alt="" />
                                        <p>{this.props.spot.sites} sites</p>
                                    </li>
                                    <li>
                                        <img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/family.png' alt="" />
                                        <p>Up to {this.props.spot.max_capacity} guests per site</p>
                                    </li>
                                    <li>
                                        <img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/parking.png' alt="" />
                                        <p>Parking at listing</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='spot-subsection'>
                                <h3>Essentials</h3>
                                <ul className='spot-subsection-info'>
                                    <li>
                                        <img src={campfireIconUrl} alt="" />
                                        <p>{campfireText}</p>
                                    </li>
                                    <li>
                                        <img src={toiletIconUrl} alt="" />
                                        <p>{toiletText}</p>
                                    </li>
                                    <li>
                                        <img src={petsIconUrl} alt="" />
                                        <p>{petsText}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='spot-subsection'>
                                <h3>Amenities</h3>
                                <ul className='spot-subsection-info'>
                                    <li>
                                        <img src={waterIconUrl} alt="" />
                                        <p>{waterText}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='spot-div' id='spot-details'>
                            <h1>Details</h1>
                            <div className='spot-detail-sub'>
                                <li><span className='catogory'>On arrival:</span>{this.props.spot.on_arrival}</li>
                                <li><span className='catogory'>Check in:</span>After {checkIn}</li>
                                <li><span className='catogory'> Check out:</span>Before {checkOut}</li>
                            </div>
                        </div>
                        <div className='spot-activity-section'>
                            <div className = 'spot-activity-header'>
                                <h3>Activities</h3>
                                <p>Offered on Host's property or nearby.</p>
                            </div>
                            <div className = 'spot-activities'>
                                {activites}
                            </div>
                        </div>
                        <div className='spot-review-container'>
                            <div className='spot-review-header'>
                                <h3>{this.props.reviews.length} Written reviews</h3> 
                                <button onClick={this.navigateToReviewForm}>Submit Review</button>
                            </div>

                            <ReviewList spot={this.props.spot} 
                                        reviews={this.props.reviews}
                                        deleteReview={this.props.deleteReview}
                                        currentUser={this.props.currentUser}
                            />
                        </div>
                    </div>
                    <BookingFormContainer />
                </div>
                
            </div>
        )
    }

}

const SpotActivity = (props) => {
    return (
        <div className='tile-wrapper' key={props.activityText}>
            <div className='tile'>
                <img src={props.activityUrl} alt="" />
            </div>
            <span className='tile-name'>
                {props.activityText}
            </span>
        </div>
    )
}


const ReviewList = ({ reviews, deleteReview, spot, currentUser }) => {
    
    if (reviews.length === 0) {
        return [];
    } else {

        return (
            reviews.map(review =>
                <ReviewListItemContainer
                    spot={spot}
                    currentUser={currentUser}
                    deleteReview={deleteReview}
                    review={review}
                    key={review.id} 
                />
            ))
    
    }
         
};

export default SpotShow;