import React from 'react';
import Slider from './slider'
import SpotSlider from './react_slider'

class SpotShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId);
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.spot.id !== this.props.match.params.spotId) {
    //         this.props.fetchSpot(this.props.match.params.spotId);
    //     }
    // }

    render() {
        if (!this.props.spot) return null;

        const campIconUrl = this.props.spot.tent ? 'url' : 'url'
        const campText = this.props.spot.tent ? 'Cabin provided' : 'Bring your own tents'

        const campfireIconUrl = this.props.spot.campfire ? 'url' : 'url'
        const campfireText = this.props.spot.campfire ? 'Campfires allowed' : 'No campfire'

        const toiletIconUrl = this.props.spot.toilet ? 'url' : 'url'
        const toiletText = this.props.spot.toilet ? 'Toilet available' : 'No toilet'

        const petsIconUrl = this.props.spot.pets ? 'url' : 'url'
        const petsText = this.props.spot.pets ? 'Pets allowed' : 'No pets'

        const waterIconUrl = this.props.spot.water ? 'url' : 'url'
        const waterText = this.props.spot.water ? 'Potable water available' : 'No potable water'

        const checkIn = parseInt(this.props.spot.check_in) > 12 ? (parseInt(this.props.spot.check_in) - 12).toString + 'PM' : parseInt(this.props.spot.check_in).toString + 'AM'
        const checkOut = parseInt(this.props.spot.check_out) > 12 ? (parseInt(this.props.spot.check_out) - 12).toString + 'PM' : parseInt(this.props.spot.check_out).toString + 'AM'

        
        const activites = []
        if (this.props.spot.hiking) {
            activites.push(<SpotActivity activityUrl=''  activityText='Hiking'/>)
        }
        if (this.props.spot.swimming) {
            activites.push(<SpotActivity activityUrl='' activityText='Swimming' />)
        } 
        if (this.props.spot.fishing) {
            activites.push(<SpotActivity activityUrl='' activityText='Fishing' />)
        }
        if (this.props.spot.wildlife) {
            activites.push(<SpotActivity activityUrl='' activityText='Wildlife watching' />)
        }

  
        return (
            <div className='spot-show-container'>
                <div className='slideshow-container'>
                    {/* <Slider imgUrls={this.props.spot.photoUrls} /> */}
                    <SpotSlider imgUrls={this.props.spot.photoUrls} />
                </div>

                <div className= 'spot-show'>
                    <div className='spot-div'>
                        <h1 className='spot-title'>{this.props.spot.title}</h1>
                    </div>
                    <div className='spot-div'>
                        <div className='spot-host'>
                            <img src="#" alt="avatar"/>
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
                                    <img src='siteUrl' alt="" />
                                    <p>{this.props.spot.sites} sites</p>
                                </li>
                                <li>
                                    <img src='guestsUrl' alt="" />
                                    <p>Up to {this.props.spot.max_capacity} guests per site</p>
                                </li>
                                <li>
                                    <img src='parkingUrl' alt="" />
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
                            <h3>On arrival: {this.props.spot.on_arrival}</h3>
                            <h3>Check in: After {checkIn}</h3>
                            <h3>Check out: Before {checkOut}</h3>
                        </div>
                    </div>
                    <div className='spot-activity-section'>
                        <div className = 'spot-activity-header'>
                            <h3>Activities</h3>
                            <p>Offered on Host's property or nearby.</p>
                        </div>
                        <div className = 'spot-activities'>
                            {spotActivities}
                        </div>
                    </div>
                    <div className='spot-review-container'></div>
                </div>
            </div>
        )
    }

}

const SpotActivity = (props) => {
    return (
        <div className='tile-wrapper'>
            <div className='tile'>
                <img src={props.activityUrl} alt="" />
            </div>
            <span className='tile-name'>
                {props.activityText}
            </span>
        </div>
    )
}

export default SpotShow;