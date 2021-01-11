import React, { Component } from 'react';
import Card from "../Card/Card"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Icon from 'react-fa';

const cssStyle = {
  fontFamily: "Calibri",
  fontSize: "1.5em",
  letterSpacing: "1.5px"
}

class Slider1 extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay: true,
      speed: 7000,
      autoplaySpeed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="container">
        <div className="row">
          <span className="p-2" style={{ fontSize: "1.5em", fontFamily: "calibri" }} >{this.props.title}</span>
          {/* <Link><h6 className="col-lg-3 col-md-3 col-sm-3 col-xs-3" style={{ position: "relative", left: "50%" }} >View All &gt;</h6></Link> */}
        </div>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        {/* <Slider className={cssstyle} {...settings}>
          {this.props.data.map(d => {
            return <Card key={d.id} data={d}></Card>
          })}
        </Slider> */}
        <Carousel
          slidesPerPage={6}
          slidesPerScroll={2}
          animationSpeed={1000}
          autoPlay={8000}
          stopAutoPlayOnHover
          // infinite
          arrowLeft={<Icon style={{ color: "#006400", fontSize: "30px", paddingRight: "10px" }} className="icon-example" name="arrow-circle-left" />}
          arrowRight={<Icon style={{ color: "#006400", fontSize: "30px", paddingLeft: "10px" }} className="icon-example" name="arrow-circle-right" />}
          addArrowClickHandler
          breakpoints={{
            1000: { // these props will be applied when screen width is less than 1000px
              slidesPerPage: 3,
              clickToChange: false,
              centered: false,
              arrows: true,
              infinite: false,
            },
            500: {
              slidesPerPage: 2,
              slidesPerScroll: 1,
              clickToChange: false,
              centered: false,
              arrows: true,
              infinite: false,
            },
          }}
        >
          {
            this.props.data.map(d => {
              return <Card player={this.props.player} key={d.id} data={d}></Card>
            })
          }
        </Carousel>
      </div>
    );
  }
}

export default Slider1;

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 400px;
}
h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`