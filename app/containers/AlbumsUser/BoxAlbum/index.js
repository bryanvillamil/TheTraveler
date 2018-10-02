/**
 *
 * BoxAlbum
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Img from 'components/Img';
import Icons from 'components/Icons';
import { Box } from './styledComponents';

function BoxAlbum(props) {
  const { title, handleRedirectPhotos, id } = props;

  const photoClick = () => {
    handleRedirectPhotos(id);
  };

  return (
    <Box>
      <div className="box">
        <button onClick={photoClick}>
          <div className="box__img">
            <Img src="https://dummyimage.com/300x200/f8f8f8/000" alt="prueba" />
            <div className="box__icon">
              <Icons iconName="album" />
            </div>
          </div>
          <div className="box__text">
            <span>{title}</span>
          </div>
        </button>
      </div>
    </Box>
  );
}

BoxAlbum.propTypes = {
  handleRedirectPhotos: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.number,
};

export default BoxAlbum;
