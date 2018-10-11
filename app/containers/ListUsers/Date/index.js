/**
 *
 * Date
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import moment from 'moment';

import { ContentDate, DateBox, DateTitle } from './styledComponents';

/* eslint-disable react/prefer-stateless-function */
class Date extends React.Component {
  state = {
    valueSelect: '************',
  };

  handleChange = event => {
    this.setState({ valueSelect: event.target.value });
  };

  renderSwitch(formatDate) {
    switch (formatDate) {
      case 'DayHour':
        return (
          // mm-dd-yyyy hh:ss
          'MM-DD-YYYY, HH:mm'
        );
      case 'Day':
        return (
          // dd mmm yyyy
          'DD MMM YYYY'
        );
      case 'Hour':
        return (
          // HH: ss : AM/PM
          'HH:ss A'
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
    const now = moment().format(this.state.valueSelect);

    return (
      <ContentDate>
        <DateTitle>
          <h4>Current date</h4>
        </DateTitle>

        <DateBox>
          <select
            name="selectFormat"
            onChange={this.handleChange}
            defaultValue={this.state.valueSelect}
          >
            <option disabled defaultValue value="Empty">
              select an option
            </option>
            <option value={this.renderSwitch('DayHour')}>Día con hora</option>
            <option value={this.renderSwitch('Day')}>Día</option>
            <option value={this.renderSwitch('Hour')}>Hora</option>
            <option value={this.renderSwitch('MonthFirst')}>Mes inicial</option>
          </select>
          <span>{now}</span>
        </DateBox>
      </ContentDate>
    );
  }
}

Date.propTypes = {};

export default Date;
