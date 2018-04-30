import React from "react";
import img1 from'./images/people/01.jpg';
import img2 from'./images/people/02.jpg';
import img3 from'./images/people/03.jpg';
import img4 from'./images/people/04.jpg';
import img5 from'./images/people/05.jpg';
import img6 from'./images/people/06.jpg';
import img7 from'./images/people/07.jpg';
import img8 from'./images/people/08.jpg';
import img9 from'./images/people/09.jpg';
import img10 from'./images/people/10.jpg';
import img11 from'./images/people/11.jpg';
import img12 from'./images/people/12.jpg';
import img13 from'./images/people/13.jpg';
import img14 from'./images/people/14.jpg';
import img15 from'./images/people/15.jpg';
import img16 from'./images/people/16.jpg';
import img17 from'./images/people/17.jpg';
import img18 from'./images/people/18.jpg';
import img19 from'./images/people/19.jpg';
import img20 from'./images/people/20.jpg';
import img21 from'./images/people/21.jpg';
import img22 from'./images/people/22.jpg';
import img23 from'./images/people/23.jpg';
import img24 from'./images/people/24.jpg';
import img25 from'./images/people/25.jpg';
import img26 from'./images/people/26.jpg';
import img27 from'./images/people/27.jpg';
import img28 from'./images/people/28.jpg';
import img29 from'./images/people/29.jpg';
import img30 from'./images/people/30.jpg';
import img31 from'./images/people/31.jpg';
import img32 from'./images/people/32.jpg';
import img33 from'./images/people/33.jpg';
import img34 from'./images/people/34.jpg';
import img35 from'./images/people/35.jpg';
import img36 from'./images/people/36.jpg';
import img37 from'./images/people/37.jpg';


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

    }, {
        content:
        img15

    }, {
        content:
        img16

    }, {
        content:
        img17

    }, {
        content:
        img18

    }, {
        content:
        img19

    }, {
        content:
        img20

    },
    {
        content:
        img21

    }, {
        content:
        img22

    }, {
        content:
        img23

    }, {
        content:
        img24

    }, {
        content:
        img25

    }, {
        content:
        img26

    },{
        content:
        img27

    }, {
        content:
        img28

    }, {
        content:
        img29

    }, {
        content:
        img30

    }, {
        content:
        img31

    }, {
        content:
        img32

    }, {
        content:
        img33

    },
    {
        content:
        img34

    }, {
        content:
        img35

    }, {
        content:
        img36

    },
    {
        content:
        img37

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

class People extends React.Component{
    render(){
        return(
            <div className="carousel-container">
                <Carousel slides={carouselSlidesData}/>
            </div>
        )
    }
}

export default People;