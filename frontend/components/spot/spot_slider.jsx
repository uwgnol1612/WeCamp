import React from 'react';
import Slider from 'react-slick';

class SpotSlider extends React.Component {
    render() {
        const settings = {
            infinite: true,
            speed: 300,
            slidesToShow: 2
            // slidesToScroll: 2
        }
        const photos = this.props.imgUrls.map((url, idx) => 
            <div className='image-slide' key={`img-${idx}`}>
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