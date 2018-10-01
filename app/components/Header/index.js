import React from 'react';
import { FormattedMessage } from 'react-intl';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Carousel from './Carousel';
// import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

import { ContenHeader } from './styledComponents';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <ContenHeader>
        <Carousel />
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </ContenHeader>
    );
  }
}

export default Header;
