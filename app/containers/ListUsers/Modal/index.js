import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'components/Icons';

import { BackdropStyle, ModalStyle } from './styledComponents';

export default class Modal extends React.PureComponent {
  // export const Modal = props => {
  render() {
    const { name, onClose, show } = this.props;

    // Render nothing if the "show" prop is false
    if (!show) {
      return null;
    }

    return (
      <BackdropStyle>
        <ModalStyle>
          <div className="cerrar">
            <button onClick={onClose}>
              <Icons iconName="close" width="30" height="30" />
            </button>
          </div>
          <div className="info">
            <span>{name}</span>
            <span>liadsd</span>
          </div>
        </ModalStyle>
      </BackdropStyle>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
  name: PropTypes.string,
};
