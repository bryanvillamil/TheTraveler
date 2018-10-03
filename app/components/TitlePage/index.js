/**
 *
 * TitlePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { TitleHome } from './styledComponents';

function TitlePage(props) {
  const { title } = props;
  return (
    <TitleHome>
      <h2 className="link link--kukuri" data-letters={title}>
        {title}
      </h2>
    </TitleHome>
  );
}

TitlePage.propTypes = {
  title: PropTypes.string,
};

TitlePage.defaultProps = {
  title: 'The Traveler',
};

export default TitlePage;
