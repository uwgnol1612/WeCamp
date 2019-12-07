import React from 'react';
import { withRouter } from 'react-router-dom'
import { SwitchButton1, SwitchButton2, SwitchButton3, SwitchButton4 } from './switch_button'


class SpotForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,

            title: '',
            description: '',

            sites: 0,
            max_capacity: 0,
            lat: 38.881638,
            lng: -107.107038,

            check_in: '14:00',
            check_out: '12:00',
            on_arrival: 'Meet and greet',
            price: 0,

            tent: false,
            parking: false,
            campfire: false,
            pets: false,
            toilet: false,
            water: false,
            shower: false,
            hiking: false,
            swimming: false,
            fishing: false,
            wildlife: false,

            photos:[]

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhotoUpload = this.handlePhotoUpload.bind(this);
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.stringToBoolean = this.stringToBoolean.bind(this);
    }


    handleChange(field) {

        return e => {

            let value;
            if (field === 'tent') {
                value = this.stringToBoolean(e.target.value)
            } else {
                value = e.target.value
            }

            this.setState({
                [field]: value
            });
        }
     
    }

    update(type, value) {
        return e => this.setState( {
            [type]: value
        })
    }

    stringToBoolean(value) {
        if (value && typeof value === 'string') {
            if (value.toLowerCase() === "true") return true;
            if (value.toLowerCase() === "false") return false;
        }
        return value;
    }

    handleRadioChange(type) {
        return e => {
            this.setState({
                [type]: this.stringToBoolean(e.target.value)
            })
        }
    }


    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('spot[title]', this.state.title)
        formData.append('spot[description]', this.state.description)
        formData.append('spot[host_id]', this.props.currentUser)

        debugger

        formData.append('spot[sites]', this.state.sites)
        formData.append('spot[max_capacity]', this.state.max_capacity)
        formData.append('spot[lat]', this.state.lat)
        formData.append('spot[lng]', this.state.lng)

        debugger

        formData.append('spot[check_in]', this.state.check_in)
        formData.append('spot[check_out]', this.state.check_out)
        formData.append('spot[on_arrival]', this.state.on_arrival)
        formData.append('spot[price]', this.state.price)

        debugger

        formData.append('spot[tent]', this.state.tent)
        formData.append('spot[parking]', this.state.parking)
        formData.append('spot[campfire]', this.state.campfire)
        formData.append('spot[pets]', this.state.pets)
        formData.append('spot[toilet]', this.state.toilet)
        formData.append('spot[water]', this.state.water)
        formData.append('spot[shower]', this.state.shower)

        debugger

        formData.append('spot[hiking]', this.state.hiking)
        formData.append('spot[swimming]', this.state.swimming)
        formData.append('spot[fishing]', this.state.fishing)
        formData.append('spot[wildlife]', this.state.wildlife)

        debugger

        if (this.state.photos.length > 0) {
            for (let i = 0; i < this.state.photos.length; i++) {
                formData.append('spot[photos][]', photos[i]);
            }
        }

        debugger

        this.props.createSpot(formData);
   
        // this.props.history.push('/spots')
    }


    handlePhotoUpload(e) {
        this.setState({
            photos: e.target.files
        }) 

    }


    _next() {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 4 ? 5 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button
                    className="btn prev"
                    type="button" onClick={this._prev}>
                    ❮
                </button>
            )
        }
        return null;
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 5) {
            return (
                <button
                    className="btn right"
                    type="button" onClick={this._next}>
                    ❯
                </button>
            )
        }
        return null;
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    {this.previousButton()}
                    {this.nextButton()}

                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        title={this.state.title}
                        description={this.state.description}
                    />

                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        sites={this.state.sites}
                        max_capacity={this.state.max_capacity}
                        lat={this.state.lat}
                        lng={this.state.lng}

                    />
        
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        check_in={this.state.check_in}
                        check_out={this.state.check_out}
                        on_arrival={this.state.on_arrival}
                        price={this.state.price}
                        tent={this.state.tent}

                    />

                    <Step4
                        currentStep={this.state.currentStep}
                        handleRadioChange={this.handleRadioChange}
                        update={this.update}
                        
                        parking={this.state.parking}
                        campfire={this.state.campfire} 
                        pets={this.state.pets}
                        toilet={this.state.toilet}
                        water={this.state.water}

                        shower={this.state.shower}
                        hiking={this.state.hiking} 
                        swimming={this.state.swimming}
                        fishing={this.state.fishing}
                        wildlife={this.state.wildlife}
 
                    />

                    <Step5
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        photos={this.state.photos}
                        handlePhotoUpload={this.handlePhotoUpload}

                        errors = {this.props.errors}

                    />

                </form>
            </React.Fragment>
        );
    }
}


export default withRouter(SpotForm);



class Step1 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.currentStep !== 1) return null

        return (
            <div className="form-group">
                <div>
                    <div>Name your camp</div>
                    <p>Stuck? Include the site or structure type and the type of nature on your land.</p>
                    <input
                        type="text"
                        value={this.props.title}
                        onChange={this.props.handleChange('title')}
                        placeholder='e.g. Tent Camping with Amazing Views'
                    />
                </div>
                <div>
                    <div>Describe your camp</div>
                    <p>Good views? What type of terrain or vegetation? Private? What’s nearby?</p>
                    <input
                        type="text"
                        value={this.props.description}
                        placeholder= 'e.g. Pitch your tent in our Redwood grove and have access to your own picnic table and fire ring. This camp is 3 minute walk from the main house and you will have complete privacy.'
                        onChange={this.props.handleChange('description')}
                    />
                </div>
            </div>
        );

    }
}

class Step2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            lat: this.props.lat,
            lng: this.props.lng
        }
        this.handleAddressChange = this.handleAddressChange.bind(this);
    }


    handleAddressChange(e) {
        this.setState({
            address: e.target.value
        })

        const geoCoder = new google.maps.Geocoder();

        geoCoder.geocode({ address: this.state.address }, (results, status) => {
            let reslat;
            let reslng;

            if (status === 'OK') {
                reslat = results[0].geometry.location.lat;
                reslng = results[0].geometry.location.lng
                this.setState({
                    lat: reslat,
                    lng: reslng
                })

                this.props.handleChange('lat')
                this.props.handleChange('lng')
            }
            
        })

    }

    render() {
    if (this.props.currentStep !== 2) return null
    return (
        <div className="form-group">
            <div>
                <div>How many camp sites are available?</div>
                <input
                    type="number"
                    value={this.props.sites}
                    onChange={this.props.handleChange('sites')}
                />
            </div>
            <div>
                <div>How many people are allowed per site?</div>
                <input
                    type="number"
                    value={this.props.max_capacity}
                    onChange={this.props.handleChange('max_capacity')}
                />
            </div>
            <div>
                <div>what's the address of the camp site?</div>
                <input
                    type="text"
                    value={this.state.address}
                    onChange={this.handleAddressChange}
                />
            </div>
        </div>
    );
    
    }


}

class Step3 extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        if (this.props.currentStep !== 3) return null

        return (
            <React.Fragment>
                <div className="form-group">
                    <div>
                        <h3>Pricing</h3>
                        <p>Set a base price and if you'd like to allow additional WeCampers, you can charge an extra fee per person.</p>
                        <input
                            type="number"
                            value={this.props.price}
                            onChange={this.props.handleChange('price')}
                        />
                    </div>
                    <div>
                        <div>
                            <h3>Accomodations</h3>
                            <select value={this.props.tent} onChange={this.props.handleChange('tent')}>
                                <option selected value="false">Bring your own tent</option>
                                <option value="true">Cabin provided</option>
                            </select>
                        </div>
                        <div>
                            <h3>Check in process</h3>
                            <select value={this.props.on_arrival} onChange={this.props.handleChange('on_arrival')}>
                                <option selected value="Meet and greet">Meet and greet</option>
                                <option value="Go straight to camp">Go straight to camp</option>
                            </select>
                        </div>
                        <div>
                            <h3>Check in after...</h3>
                            <select value={this.props.check_in} onChange={this.props.handleChange('check_in')}>

                                <option value="0:00">12:00 AM</option>
                                <option value="1:00">1:00 AM</option>
                                <option value="2:00">2:00 AM</option>
                                <option value="3:00">3:00 AM</option>
                                <option value="4:00">4:00 AM</option>
                                <option value="5:00">5:00 AM</option>
                                <option value="6:00">6:00 AM</option>
                                <option value="7:00">7:00 AM</option>
                                <option value="8:00">8:00 AM</option>
                                <option value="9:00">9:00 AM</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="11:00">11:00 AM</option>

                                <option value="12:00">12:00 PM</option>
                                <option value="13:00">1:00 PM</option>
                                <option selected value="14:00">2:00 PM</option>
                                <option value="15:00">3:00 PM</option>
                                <option value="16:00">4:00 PM</option>
                                <option value="1700">5:00 PM</option>
                                <option value="18:00">6:00 PM</option>
                                <option value="19:00">7:00 PM</option>
                                <option value="20:00">8:00 PM</option>
                                <option value="21:00">9:00 PM</option>
                                <option value="22:00">10:00 PM</option>
                                <option value="23:00">11:00 PM</option>
                            </select>
                        </div>

                        <div>
                            <h3>Check out before...</h3>
                            <select value={this.props.check_out} onChange={this.props.handleChange('check_out')}>

                                <option value="0:00">12:00 AM</option>
                                <option value="1:00">1:00 AM</option>
                                <option value="2:00">2:00 AM</option>
                                <option value="3:00">3:00 AM</option>
                                <option value="4:00">4:00 AM</option>
                                <option value="5:00">5:00 AM</option>
                                <option value="6:00">6:00 AM</option>
                                <option value="7:00">7:00 AM</option>
                                <option value="8:00">8:00 AM</option>
                                <option value="9:00">9:00 AM</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="11:00">11:00 AM</option>

                                <option selected value="12:00">12:00 PM</option>
                                <option value="13:00">1:00 PM</option>
                                <option value="14:00">2:00 PM</option>
                                <option value="15:00">3:00 PM</option>
                                <option value="16:00">4:00 PM</option>
                                <option value="1700">5:00 PM</option>
                                <option value="18:00">6:00 PM</option>
                                <option value="19:00">7:00 PM</option>
                                <option value="20:00">8:00 PM</option>
                                <option value="21:00">9:00 PM</option>
                                <option value="22:00">10:00 PM</option>
                                <option value="23:00">11:00 PM</option>

                            </select>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

    }

}


class Step4 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hiking: this.props.hiking,
            swimming: this.props.swimming,
            fishing: this.props.fishing,
            wildlife: this.props.wildlife

        }
        this.handleButtonToggle = this.handleButtonToggle.bind(this);

    }

    handleButtonToggle(type) {

        this.setState({
            [type]: !this.state[type]
        })
        // debugger
        this.props.update(type, !this.state[type]);
    }


        render() {
            if (this.props.currentStep !== 4) {
                return null
            }
            return (
                <React.Fragment>
                    <div className="form-group">
                        <div>
                            <h3>Amenities</h3>
                            <div>
                                <h3>Portable Water</h3>
                                <div>
                                    <label>Yes
                                    <input
                                        type="radio"
                                        value='true'
                                        checked={this.props.water.toString() === 'true'}
                                        onChange={this.props.handleRadioChange('water')} 
                                    />
                                    </label>
                                    <label>No
                                    <input
                                        type="radio"
                                        value='false'
                                        checked={(this.props.water).toString() === 'false'}
                                        onChange={this.props.handleRadioChange('water')}
                                    />
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h3>Parking</h3>
                                <div>
                                    <label>Yes
                                    <input
                                            type="radio"
                                            value='true'
                                            checked={(this.props.parking).toString() === 'true'}
                                            onChange={this.props.handleRadioChange('parking')}
                                        />
                                    </label>
                                    <label>No
                                    <input
                                            type="radio"
                                            value='false'
                                            checked={(this.props.parking).toString() === 'false'}
                                            onChange={this.props.handleRadioChange('parking')}
                                        />
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h3>Campfires</h3>
                                <div>
                                    <label>Yes
                                    <input
                                            type="radio"
                                            value='true'
                                            checked={(this.props.campfire).toString() === 'true'}
                                            onChange={this.props.handleRadioChange('campfire')}
                                        />
                                    </label>
                                    <label>No
                                    <input
                                            type="radio"
                                            value='false'
                                            checked={(this.props.campfire).toString() === 'false'}
                                            onChange={this.props.handleRadioChange('campfire')}
                                        />
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h3>Pets</h3>
                                <div>
                                    <label>Yes
                                    <input
                                            type="radio"
                                            value='true'
                                            checked={(this.props.pets).toString() === 'true'}
                                            onChange={this.props.handleRadioChange('pets')}
                                        />
                                    </label>
                                    <label>No
                                    <input
                                            type="radio"
                                            value='false'
                                            checked={(this.props.pets).toString() === 'false'}
                                            onChange={this.props.handleRadioChange('pets')}
                                        />
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h3>Toilets</h3>
                                <div>
                                    <label>Yes
                                    <input
                                            type="radio"
                                            value='true'
                                            checked={(this.props.toilet).toString() === 'true'}
                                            onChange={this.props.handleRadioChange('toilet')}
                                        />
                                    </label>
                                    <label>No
                                    <input
                                            type="radio"
                                            value='false'
                                            checked={(this.props.toilet).toString() === 'false'}
                                            onChange={this.props.handleRadioChange('toilet')}
                                        />
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h3>Showers</h3>
                                <div>
                                    <label>Yes
                                    <input
                                            type="radio"
                                            value='true'
                                            checked={(this.props.shower).toString() === 'true'}
                                            onChange={this.props.handleRadioChange('shower')}
                                        />
                                    </label>
                                    <label>No
                                    <input
                                            type="radio"
                                            value='false'
                                            checked={(this.props.shower).toString() === 'false'}
                                            onChange={this.props.handleRadioChange('shower')}
                                        />
                                    </label>
                                </div>
                            </div>

                        </div>

                        <div>
                            <h3>Activities</h3>
                            <div>
                                <h3>Hiking</h3>
                                <SwitchButton1 
                                    isOn={this.state.hiking}
                                    handleToggle={() => this.handleButtonToggle('hiking')}
                                />
                            </div>

                            <div>
                                <h3>Swimming</h3>
                                <SwitchButton2
                                    isOn={this.state.swimming}
                                    handleToggle={() => this.handleButtonToggle('swimming')}
                                />
                            </div>

                            <div>
                                <h3>Fishing</h3>
                                <SwitchButton3
                                    isOn={this.state.fishing}
                                    handleToggle={() => this.handleButtonToggle('fishing')}
                                />
                            </div>

                            <div>
                                <h3>Wildlife watching</h3>
                                <SwitchButton4
                                    isOn={this.state.wildlife}
                                    handleToggle={() => this.handleButtonToggle('wildlife')}
                                />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );

        }  
}




class Step5 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: [],
            imageUrls: []
        }
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleImageChange(e) {
        e.preventDefault();

        const images = Array.from(e.target.files)
        images.forEach(img => {
            const reader = new FileReader();
            reader.onloadend = () => {
                this.setState({
                    photos: [...this.state.photos, img],
                    imageUrls: [...this.state.imageUrls, reader.result]
                })
            }
            reader.readAsDataURL(img)
        })

        this.props.handlePhotoUpload(this.state.photos);

    }


    render() {
        const errors = this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)

        if (this.props.currentStep !== 5) return null

        let previewImgs = []

        if (this.state.imageUrls.length > 0) {
            previewImgs = this.state.imageUrls.map(url => {
                return (
                    <img key={url} src={url} />
                )
            })
        }

        return (
                < React.Fragment >
                <div className="form-group">
                    <div className='photo-instructions'>
                        <h3>Upload at least 5 photos of your listing</h3>
                        <div className='good-photo-type'> 
                            <div>What types of photos should I upload?</div>
                            <li>Zoomed-out photo of where the Hipcamper will be sleeping</li>
                            <li>Wide, horizontally-oriented</li>
                            <li>Bright, day-time</li>
                        </div>
                        <div className='bad-photo-type'>
                            <div>Don't upload photos that are:</div>
                            <li>Blurry</li>
                            <li>Too dark</li>
                            <li>Illustrations or graphics</li>
                        </div>
                    </div>
                    <div>
                        <div>
                            {previewImgs}
                       </div>
                    <input
                        type="file"
                        onChange={this.handleImageChange}
                        multiple
                    />
                    </div>
                </div>
                <button className="spot-submit-btn">Submit</button>
                <div>
                    {errors}
                </div>

               
               
        </React.Fragment >
        )
    }

}




