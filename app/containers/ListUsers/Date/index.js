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
  renderSwitch(formatDate) {
    switch (formatDate) {
      case 'DayHour':
        return (
          // mm-dd-yyyy hh:ss
          'MM-DD-YYYY hh:ss'
        );
      case 'Day':
        return (
          // dd mmm yyyy
          'DD MMM YYYY'
        );
      case 'Hour':
        return (
          // HH: ss : AM/PM
          'HH: ss : AM/PM'
        );
      case 'MonthFirst':
        return (
          // mm/dd/yyyy
          'MM/DD/YYYY'
        );
      default:
        return null;
    }
  }

  render() {
    const now = moment().format(this.renderSwitch('Day'));

    return (
      <div>
        <select name="selectFormat">
          <option value={this.renderSwitch('DayHour')}>Día con hora</option>
          <option value={this.renderSwitch('Day')}>Día</option>
          <option value={this.renderSwitch('Hour')}>Hora</option>
          <option value={this.renderSwitch('MonthFirst')}>Mes inicial</option>
        </select>

        <span>{now}</span>
      </div>
    );
  }
}

Date.propTypes = {};

export default Date;
