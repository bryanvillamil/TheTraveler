import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Img from './Img';
import Banner1 from './imgCarousel/carousel1.jpg';
import Banner2 from './imgCarousel/carousel2.jpg';
import Banner3 from './imgCarousel/carousel3.jpg';
import Banner4 from './imgCarousel/carousel4.jpg';

export default () => (
  <Carousel autoPlay showThumbs={false} showIndicators={false}>
    <div className="contentImg">
      <Img src={Banner1} alt="carousel 1" />
    </div>
    <div className="contentImg">
      <Img src={Banner2} alt="carousel 2" />
    </div>
    <div className="contentImg">
      <Img src={Banner3} alt="carousel 3" />
    </div>
    <div className="contentImg">
      <Img src={Banner4} alt="carousel 4" />
    </div>
  </Carousel>
);
