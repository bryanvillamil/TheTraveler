/**
 *
 * ListUsers
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Container from 'components/Container';
import Header from 'components/Header';
import { findIndex } from 'lodash';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectListUsers from './selectors';
import reducer from './reducer';
import saga from './saga';
import User from './UserItem';
import Search from './SearchUser';
import Date from './Date';
import Modal from './Modal';
import { getTable } from './actions';

import { ContentUsers } from './styledComponents';

/* eslint-disable react/prefer-stateless-function */
export class ListUsers extends React.PureComponent {
  componentDidMount() {
    const { getTableData } = this.props;
    getTableData();
  }

  handleRedirectAlbums = id => {
    const {
      history: { push },
      listusers: { data },
    } = this.props;

    const userId = findIndex(data, { id });
    if (userId !== -1) {
      const Username = data[userId].name;
      push(`${id}/albums`, {
        Username,
      });
    }
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
          <title>List Users</title>
          <meta name="description" content="Description of ListUsers" />
        </Helmet>
        <Header />
        <Container>
          <h2>Lista de usuario</h2>

          <Search />
          <Date />

          <ContentUsers>
            {data &&
              data.map(user => (
                <User
                  key={user.id}
                  {...user}
                  handleRedirectAlbums={this.handleRedirectAlbums}
                />
              ))}
          </ContentUsers>
        </Container>
        <Modal />
      </div>
    );
  }
}

ListUsers.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getTableData: PropTypes.func.isRequired,
  listusers: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
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
