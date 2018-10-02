import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Carousel from './Carousel';
// import Img from './Img';

import { ContenHeader } from './styledComponents';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <ContenHeader>
        <Carousel />
      </ContenHeader>
    );
  }
}

export default Header;
