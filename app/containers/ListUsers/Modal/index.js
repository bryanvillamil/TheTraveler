import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'components/Icons';

import { BackdropStyle, ModalStyle } from './styledComponents';

export default class Modal extends React.PureComponent {
  // export const Modal = props => {
  render() {
    const {
      name,
      address,
      phone,
      username,
      website,
      company,
      onClose,
    } = this.props;

    // Render nothing if the "show" prop is false

    return (
      <BackdropStyle>
        <ModalStyle>
          <div className="cerrar">
            <button onClick={onClose}>
              <Icons iconName="close" width="30" height="30" />
            </button>
          </div>
          <div className="info">
            <div className="info__title">
              <h3>{name}</h3>
            </div>
            <div className="info__address">
              <h4>Address</h4>
              <div className="content">
                <span>
                  <strong>city: </strong>
                  {address.city}
                </span>
                <span>
                  <strong>street: </strong>
                  {`${address.street} (${address.suite})`}
                </span>
                <span>
                  <strong>zipcode: </strong>
                  {address.zipcode}
                </span>
              </div>
            </div>
            <div className="info__company">
              <h4>Company</h4>
              <div className="content">
                <span>
                  <strong>name:</strong>
                  {company.name}
                </span>
              </div>
            </div>
            <div className="info__phone">
              <span>
                <strong>Phone: </strong>
                {phone}
              </span>
            </div>
            <div className="info__userName">
              <span>
                <strong>Username: </strong>
                {username}
              </span>
            </div>
            <div className="info__web">
              <span>
                <strong>Website: </strong>
                {website}
              </span>
            </div>
          </div>
        </ModalStyle>
      </BackdropStyle>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  name: PropTypes.string,
  address: PropTypes.object,
  phone: PropTypes.string,
  username: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.object,
};
