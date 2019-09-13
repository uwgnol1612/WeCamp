# WeCamp

WeCamp, a HipCamp clone, is a web application that allows users to search, browse and make reservations of campsites of interests, as well as share their camping experiences.

![WeCamp](https://we-camp-seeds.s3.us-east-2.amazonaws.com/1.png)

You can visit WeCamp [here](https://we--camp.herokuapp.com/#/)!

The technlogies used to create WeCamp include: React and Redux, PostgresSQL, Ruby on Rails, AWS, Google Maps API, Sass/SCSS, HTML5, and CSS3.

## Features
### User Authentication

The User Auth was created using BCrypty on a rails backend:
* Users can sign up, sign in, and log out
* Users can use a demo login to try the site
* Users don't have access to certain features such as making reservations & leaving comments without logging in.

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

Users can search for campsites by applying one or more filters from a list of categories such as group size, price, amenities and activties offered by the spot.

![SpotFilter](https://we-camp-seeds.s3.us-east-2.amazonaws.com/3.png)

```Javascript
<div className="spot-dropdown">
                <li><button onClick={() => showDropdown('spot-activity-filter')} className="dropbtn" >Activities</button>
                    <div id="spot-activity-filter" className="spot-filter-items">
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='hiking'
                            filterValue={true}
                            description='Hiking'
                            iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/hiking.png' />
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='swimming'
                            filterValue={true}
                            description='Swimming'
                            iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/swimming.png' />
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='fishing'
                            filterValue={true}
                            description='Fishing'
                            iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/fishing.png' />
                        <Button
                            updateFilter={updateFilter}
                            removeFilter={removeFilter}
                            filterType='wildlife'
                            filterValue={true}
                            description='Wildlife watching'
                            iconUrl='https://we-camp-seeds.s3.us-east-2.amazonaws.com/dove.png' />
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
