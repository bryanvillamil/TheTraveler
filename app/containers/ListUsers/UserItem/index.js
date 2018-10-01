/**
 *
 * UserItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Icons from 'components/Icons';

import { BoxUser, User, Span } from './styledComponents';

function UserItem(props) {
  // se debe pasar los props como parametro (props)
  const { name, email, handleRowClick, id } = props;

  const rowClick = () => {
    handleRowClick(id);
  };

  return (
    <BoxUser onClick={rowClick}>
      <div className="folder">
        <div className="contentIcon">
          <Icons iconName="folder" height="40" width="40" />
        </div>
      </div>
      <User>
        <Span>{name}</Span>
        <Span>{email}</Span>
      </User>
      <div className="info">
        <Icons iconName="info" backgroundColor="red" height="30" width="30" />
      </div>
    </BoxUser>
  );
}

UserItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  handleRowClick: PropTypes.func,
  id: PropTypes.number,
};

export default UserItem;
