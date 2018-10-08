/**
 *
 * ModalPhoto
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'components/Icons';
import Img from 'components/Img';

import { BackdropStyle, ModalStyle } from './styledComponents';

/* eslint-disable react/prefer-stateless-function */
class ModalPhoto extends React.PureComponent {
  render() {
    const { onClose, url, title } = this.props;
    return (
      <BackdropStyle>
        <ModalStyle>
          <div className="cerrar">
            <button onClick={onClose}>
              <Icons iconName="close" width="30" height="30" />
            </button>
          </div>
          <div className="modal__content">
            <div className="title">
              <h4>{title}</h4>
            </div>
            <div className="imgBg">
              <Img src={url} alt={title} />
            </div>
          </div>
        </ModalStyle>
      </BackdropStyle>
    );
  }
}

ModalPhoto.propTypes = {
  onClose: PropTypes.func,
  url: PropTypes.string,
  title: PropTypes.string,
};

export default ModalPhoto;
