/**
 *
 * ListUsers
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectListUsers from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import User from './UserItem';
import { getTable } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ListUsers extends React.PureComponent {
  componentDidMount() {
    const { getTableData } = this.props;
    getTableData();
  }

  handleRowClick = id => {
    console.log(id);
  };

  render() {
    const {
      listusers: { data },
    } = this.props;
    console.log(this.props);

    // if (!data) return null

    return (
      <div>
        <Helmet>
          <title>ListUsers</title>
          <meta name="description" content="Description of ListUsers" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <h2>Lista de usuario API</h2>

        {data &&
          data.map(user => (
            <User
              key={user.id}
              {...user}
              handleRowClick={this.handleRowClick}
            />
          ))}
      </div>
    );
  }
}

ListUsers.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getTableData: PropTypes.func.isRequired,
  listusers: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listusers: makeSelectListUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getTableData: customerId => dispatch(getTable(customerId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'listUsers', reducer });
const withSaga = injectSaga({ key: 'listUsers', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListUsers);
