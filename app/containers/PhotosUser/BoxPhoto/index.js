/**
 *
 * BoxPhoto
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Img from 'components/Img';
import Icons from 'components/Icons';
import { Box } from './styledComponents';

function BoxPhoto(props) {
  const { title, url } = props;

  return (
    <Box>
      <div className="boxPhoto">
        <div className="boxPhoto__image">
          <Img src={url} alt={title} />
        </div>
        <div className="boxPhoto__desc">
          <Icons
            iconName="plus"
            height="40"
            width="40"
            backgroundColor="#fff"
          />
        </div>
      </div>
    </Box>
  );
}

BoxPhoto.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default BoxPhoto;
