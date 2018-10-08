/**
 *
 * ModalPhoto
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

// import { BackdropStyle, ModalStyle } from './styledComponents';

/* eslint-disable react/prefer-stateless-function */
class ModalPhoto extends React.PureComponent {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ModalPhoto.propTypes = {};

export default ModalPhoto;
