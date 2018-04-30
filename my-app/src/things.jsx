import React from "react";
import img1 from'./images/things/01.jpg';
import img2 from'./images/things/02.jpg';
import img3 from'./images/things/03.jpg';
import img4 from'./images/things/04.jpg';
import img5 from'./images/things/05.jpg';
import img6 from'./images/things/06.jpg';
import img7 from'./images/things/07.jpg';
import img8 from'./images/things/08.jpg';
import img9 from'./images/things/09.jpg';
import img10 from'./images/things/10.jpg';
import img11 from'./images/things/11.jpg';
import img12 from'./images/things/12.jpg';
import img13 from'./images/things/13.jpg';
import img14 from'./images/things/14.jpg';


const carouselSlidesData = [
    {
        content:
        img1

    }, {
        content:
        img2

    }, {
        content:
        img3

    }, {
        content:
        img4

    }, {
        content:
        img5

    }, {
        content:
        img6

    }, {
        content:
        img7

    },
    {
        content:
        img8

    }, {
        content:
        img9

    }, {
        content:
        img10

    }, {
        content:
        img11

    }, {
        content:
        img12

    }, {
        content:
        img13

    },{
        content:
        img14

    }
];

// Component for left arrow
class CarouselLeftArrow extends React.Component {
    render() {
        return (
            <a
                href="#"
                className="carousel__arrow carousel__arrow--left"
                onClick={this.props.onClick}
            >
                <span>Lewo</span>
            </a>
        );
    }
}

// Component for right arrow
class CarouselRightArrow extends React.Component {
    render() {
        return (
            <a
                href="#"
                className="carousel__arrow carousel__arrow--right"
                onClick={this.props.onClick}
            >
                <span> Prawo</span>
            </a>
        );
    }
}

// Component for carousel indicator
class CarouselIndicator extends React.Component {
    render() {
        return (
            <li>
                <a
                    className={
                        this.props.index == this.props.activeIndex
                            ? "carousel__indicator carousel__indicator--active"
                            : "carousel__indicator"
                    }
                    onClick={this.props.onClick}
                />
            </li>
        );
    }
}

// Component for slide
class CarouselSlide extends React.Component {
    render() {
        return (
            <div
                className={
                    this.props.index == this.props.activeIndex
                        ? "carousel__slide carousel__slide--active"
                        : "carousel__slide"
                }
            >
                <div className="carousel-slide__content">
                    <img src={this.props.slide.content}/>

                </div>



            </div>
        );
    }
}

// Carousel component
class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.goToSlide = this.goToSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

        this.state = {
            activeIndex: 0
        };
    }

    goToSlide(index) {
        this.setState({
            activeIndex: index
        });
    }

    goToPrevSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        this.setState({
            activeIndex: index
        });
    }

    goToNextSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <div className="carousel">
                <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

                <ul className="carousel__slides">
                    {this.props.slides.map((slide, index) =>
                        <CarouselSlide
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            slide={slide}
                        />
                    )}
                </ul>

                <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

                <ul className="carousel__indicators">
                    {this.props.slides.map((slide, index) =>
                        <CarouselIndicator
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            onClick={e => this.goToSlide(index)}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

class Things extends React.Component{
    render(){
        return(
            <div className="carousel-container">
                <Carousel slides={carouselSlidesData}/>
            </div>
        )
    }
}

export default Things;