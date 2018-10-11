/**
 *
 * BoxAlbum
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextEllipsis from 'react-text-ellipsis';

import Img from 'components/Img';
import Icons from 'components/Icons';
import Banner from '../../../images/AlbumsUser/bg.jpg';
import { Box } from './styledComponents';

function BoxAlbum(props) {
  const { id, title, backgroundColor, handleRedirectPhotos } = props;

  const photoClick = () => {
    handleRedirectPhotos(id);
  };

  return (
    <Box>
      <div className="box" style={{ backgroundColor }}>
        <button onClick={photoClick}>
          <div className="box__img">
            <Img src={Banner} alt="prueba" />
            <div className="box__icon">
              <Icons
                iconName="album"
                backgroundColor="#fff"
                height="35"
                width="35"
              />
            </div>
          </div>
          <div className="box__text">
            <TextEllipsis
              lines={2}
              tag="span"
              tagClass="box__text--desc"
              ellipsisChars="..."
            >
              {title}
            </TextEllipsis>
          </div>
        </button>
      </div>
    </Box>
  );
}

BoxAlbum.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  handleRedirectPhotos: PropTypes.func,
};

BoxAlbum.defaultProps = {
  backgroundColor: '#000',
};

export default BoxAlbum;
