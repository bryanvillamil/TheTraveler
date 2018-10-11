/**
 *
 * ListUsers
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Container from 'components/Container';
import Header from 'components/Header';
import TitlePage from 'components/TitlePage';
import Loading from 'components/Loading';
import { findIndex } from 'lodash';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectListUsers from './selectors';
import reducer from './reducer';
import saga from './saga';
// import User from './ItemUser';
import Search from './SearchUser';
import Modal from './Modal';
import { getTable } from './actions';

import { ContentUsers } from './styledComponents';

/* eslint-disable react/prefer-stateless-function */
export class ListUsers extends React.PureComponent {
  state = {
    userDataSelected: null,
  };

  componentDidMount() {
    const { getTableData } = this.props;
    getTableData();
  }


  openModal = id => {
    const {
      listusers: { data },
    } = this.props;

    const userId = findIndex(data, { id });
    if (userId !== -1) {
      const userInfo = data[userId];
      this.setState({
        userDataSelected: userInfo,
      });
    }
  };

  closeModal = () => {
    this.setState({
      userDataSelected: null,
    });
  };

  handleRedirectAlbums = id => {
    const {
      history: { push },
      listusers: { data },
    } = this.props;

    const userId = findIndex(data, { id });
    if (userId !== -1) {
      const Username = data[userId].name;
      push(`/user/${id}/albums`, {
        Username,
      });
    }
  };

  render() {
    const {
      listusers: { data, isLoading },
    } = this.props;

    const { userDataSelected } = this.state;

    if (!data) return null;

    return (
      isLoading
        ?
          <Loading />
        :
          <div>
            <Header />
            <Container>
              <TitlePage />
              <ContentUsers>
                <Search
                  data={data}
                  handleRedirectAlbums={this.handleRedirectAlbums}
                  openModal={this.openModal}
                />
              </ContentUsers>
            </Container>

            {userDataSelected && (
              <Modal
                show={this.state.isOpen}
                onClose={this.closeModal}
                {...userDataSelected}
              />
            )}
          </div>
    );
  }
}

ListUsers.propTypes = {
  getTableData: PropTypes.func.isRequired,
  listusers: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listusers: makeSelectListUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
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
