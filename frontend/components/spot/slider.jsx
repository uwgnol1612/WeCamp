import React from 'react'

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.imgUrls,
            currentImageIndex: 0,
            translateValue: 0,

        }

        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    prevSlide() {

        // let last = this.state.images.slice(-1)
        // let rest = this.state.images.slice(0, -1)
        // let images = [last, ...rest]
        // this.setState({ images: images });

        if (this.state.currentImageIndex === 0)
            return this.setState({
                currentImageIndex: this.props.imgUrls.length - 1,
                translateValue: -((this.props.imgUrls.length - 1) * this.slideWidth())
            })
            // return; 

        this.setState(prevState => ({
            currentImageIndex: prevState.currentImageIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }

    nextSlide() {

        // let [first, ...rest] = this.state.images;
        // let images = [...rest, first];
        // this.setState({ images: images });

        if (this.state.currentImageIndex === this.props.imgUrls.length - 1) {
            return this.setState({
                currentImageIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentImageIndex: prevState.currentImageIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));

    }

    slideWidth() {
        return document.querySelector('.image-slide').clientWidth
    }

    render() {
        return (
            <div className='slider'>

                <Arrow 
                    direction='left'
                    clickFunction={ this.prevSlide }
                    glyph="&#10094;"
                />
                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s',
                        backgroundRepeat: 'no-repeat'
                    }}>

                    { this.props.imgUrls.map((url, i) => <ImageSlide key={i} url={url} />) }

                    {/* { this.state.images.map((url, i) => <ImageSlide key={i} url={url} />) } */}

                </div>

                <Arrow
                    direction='right'
                    clickFunction={this.nextSlide}
                    glyph="&#10095;"
                />

            </div>
        )
    }
}



const ImageSlide = ({ url }) => {
    const style = {

        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className='image-slide' style={style}></div>
    )
};


const Arrow = ({direction, clickFunction, glyph}) => (
    <div
        className={`slide-arrow ${direction}` }
        onClick={ clickFunction }> {glyph}
    </div>
)


export default Slider;