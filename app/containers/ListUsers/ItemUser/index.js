import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'components/Icons';

import { BoxUser, User, Span } from './styledComponents';

/* eslint-disable react/prefer-stateless-function */
class ItemUser extends React.Component {
  rowClick = () => {
    const { id, handleRedirectAlbums } = this.props;

    handleRedirectAlbums(id);
  };

  ClickModalInfo = () => {
    const { id, name, toggleModal } = this.props;

    toggleModal(id);

    console.log(`hola ${id} ${name}`);
  };

  render() {
    const { name, email } = this.props;

    return (
      <BoxUser>
        <div className="folder">
          <div className="contentIcon">
            <Icons iconName="folder" height="40" width="40" />
          </div>
        </div>
        <User onClick={this.rowClick}>
          <Span>{name}</Span>
          <Span>{email}</Span>
        </User>
        <button className="info" onClick={this.ClickModalInfo}>
          <Icons
            iconName="info"
            backgroundColor="#000"
            height="30"
            width="30"
          />
        </button>
      </BoxUser>
    );
  }
}

ItemUser.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  handleRedirectAlbums: PropTypes.func,
  toggleModal: PropTypes.func,
  id: PropTypes.number,
};

export default ItemUser;
