/**
 *
 * UserItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'components/Icons';
// import swal from 'sweetalert';

import { BoxUser, User, Span } from './styledComponents';

function UserItem(props) {
  // se debe pasar los props como parametro (props)

  const { name, email, handleRedirectAlbums, id } = props;

  const rowClick = () => {
    handleRedirectAlbums(id);
  };

  const ClickModalInfo = () => {
    console.log(`hola ${id} ${name}`);
  };

  return (
    <BoxUser>
      <div className="folder">
        <div className="contentIcon">
          <Icons iconName="folder" height="40" width="40" />
        </div>
      </div>
      <User onClick={rowClick}>
        <Span>{name}</Span>
        <Span>{email}</Span>
      </User>
      <button className="info" onClick={ClickModalInfo}>
        <Icons
          iconName="info"
          backgroundColor="#4BBCDE"
          height="30"
          width="30"
        />
      </button>
    </BoxUser>
  );
}

UserItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  handleRedirectAlbums: PropTypes.func,
  id: PropTypes.number,
};

export default UserItem;
