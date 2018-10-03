import React from 'react';
import PropTypes from 'prop-types';
import { BackdropStyle, ModalStyle } from './styledComponents';

// export default class Modal extends React.Component {

export const Modal = props => {
  // render() {
  const { name, onClose, show } = props;

  // Render nothing if the "show" prop is false
  if (!show) {
    return null;
  }

  return (
    <BackdropStyle>
      <ModalStyle>
        <div className="footer">
          <button onClick={onClose}>Close</button>
        </div>
        <div className="info">
          <span>{name}</span>
          <span>liadsd</span>
        </div>
      </ModalStyle>
    </BackdropStyle>
  );
  // }
};

Modal.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
  name: PropTypes.string,
};
