/**
 *
 * Date
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import moment from 'moment';

/* eslint-disable react/prefer-stateless-function */
class Date extends React.Component {
  render() {
    const now = moment().format('MM/DD/YYYY');
    return (
      <div>
        <span>{now}</span>
      </div>
    );
  }
}

Date.propTypes = {};

export default Date;
