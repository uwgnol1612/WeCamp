import React from 'react';
import Slider from 'react-slick';

class SpotSlider extends React.Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2
        }
        const photos = this.props.imgUrls.map(url => 
            <div className='image-slide'>
                <img src={url} alt=""/>
            </div>)
        return (
            <Slider {...settings}>
                {photos}
            </Slider>
        )
    }
}

export default SpotSlider;