import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Img from './Img';
import Banner1 from '../../images/Header/carousel1.jpg';
import Banner2 from '../../images/Header/carousel2.jpg';
import Banner3 from '../../images/Header/carousel3.jpg';
import Banner4 from '../../images/Header/carousel4.jpg';

export default () => (
  <Carousel
    autoPlay
    showThumbs={false}
    showIndicators={false}
    showStatus={false}
  >
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
