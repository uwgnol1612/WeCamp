# WeCamp

[Live](https://we--camp.herokuapp.com/#/)

WeCamp, a HipCamp clone, is a web application that allows users to search, browse and make reservations of campsites, as well as share their camping experiences.

![WeCamp](https://we-camp-seeds.s3.us-east-2.amazonaws.com/wecamp_landing.png)

## Technologies

* Ruby on Rails
* React and Redux
* PostgreSQL
* AWS
* Google Maps API
* HTML5
* CSS3/SCSS

## Features
### User Authentication

The User Auth was created using BCrypt on rails backend:

* Users can sign up, sign in, and log out
* Users can use a demo login to try the site
* Users don't have access to certain features such as making reservations & leaving comments without logging in

![UserAuth](https://we-camp-seeds.s3.us-east-2.amazonaws.com/2.png)

```Javascript
   render() {
        const errors = this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)
        return (
            <div className="signup-form-container">
                <form className="signup-form-box">
                    <h2>Join WeCamp</h2>
                    <p>Discover the best camping near me</p>
                    <div onClick={this.props.closeModal} className="close-x">&times;</div>
                    <div className="signup-form">
                        <input
                            className="signup-input" 
                            type="text"
                            placeholder="Username..."
                            onChange={this.update('username')}
                        />
                        <input
                            className="signup-input"
                            type="email"
                            placeholder="Email address..."
                            onChange={this.update('email')}
                        />
                        <input
                            className="signup-input"
                            type="password"
                            placeholder="Password..."
                            onChange={this.update('password')}
                        />
                    </div>
                    <div className="errors-messages">
                        <ul>
                            {errors}
                        </ul>
                    </div>
                    <button className="session-submit-button" onClick={this.handleSubmit}>Join WeCamp</button>
                    <div className="session-footer-1">
                        <p>By signing up, I agree to WeCamp's terms and privacy policy.</p>
                    </div>
                    <div className="session-footer-2">
                        <span>Already a WeCamper? <button onClick={this.props.openModal}>Log in!</button>
                        </span>
                    </div>
                </form>
            </div>
        )
    }
```
### Spots Search

Users can search campsites by applying one or more filters from a list of categories such as group size, price, amenities and activties offered by the spot.

![SpotFilter](https://we-camp-seeds.s3.us-east-2.amazonaws.com/3.png)

```Javascript
                 <div className="spot-dropdown">
                    <li><button onClick={() => showDropdown('spot-amenity-filter')} className="dropbtn" >Amenities</button>
                        <div id="spot-amenity-filter" className="spot-filter-items">
                            <button
                                className="filter-button"
                                id="pet-filter"
                                onClick={() => this.handleClick('pets', true, 'pet-filter')}>
                                <img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/pet-friendly.png' />
                                Pets allowed
                            </button>
                            <button
                                className="filter-button"
                                id="toilet-filter"
                                onClick={() => this.handleClick('toilet', true, 'toilet-filter')}>
                                <img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/toilet-paper.png' />
                                Toilets
                            </button>
                            <button
                                className="filter-button"
                                id="campfire-filter"
                                onClick={() => this.handleClick('campfire', true, 'campfire-filter')}>
                                <img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/bonfire.png' />
                                Campfires
                            </button>
                            <button
                                className="filter-button"
                                id="water-filter"
                                onClick={() => this.handleClick('water', true, 'water-filter')}>
                                <img src='https://we-camp-seeds.s3.us-east-2.amazonaws.com/water.png' />
                                Water
                            </button>
                        </div>
                    </li>
                </div>
```
## Future Directions

* User profile and host
  * User can upload avatar, edit and delete their profiles
  * User can host a spot

* Messaging
  * User can leave messages/send emails to host
