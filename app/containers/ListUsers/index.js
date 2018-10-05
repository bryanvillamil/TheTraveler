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
import TitlePage from 'components/TitlePage';
import { findIndex } from 'lodash';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectListUsers from './selectors';
import reducer from './reducer';
import saga from './saga';
// import User from './ItemUser';
import Search from './SearchUser';
import Date from './Date';
import Modal from './Modal';
import { getTable } from './actions';

import { ContentUsers, HeaderTop } from './styledComponents';

/* eslint-disable react/prefer-stateless-function */
export class ListUsers extends React.PureComponent {
  state = {
    isOpen: false,
    idSelected: '',
  };

  componentDidMount() {
    const { getTableData } = this.props;
    getTableData();
  }

  toggleModal = id => {
    this.setState({
      isOpen: !this.state.isOpen,
      idSelected: id,
    });

    const {
      listusers: { data },
    } = this.props;

    const userId = findIndex(data, { id });
    if (userId !== -1) {
      const Userinfo = data[userId];
      console.log(Userinfo);
    }

    // if (this.state.idSelected) {
    //   let dataSelected = null;
    //   dataSelected = findIndex(data, { id: this.state.idSelected });
    // }
  };

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

    if (!data) return null;

    return (
      <div>
        <Helmet>
          <title>List Users</title>
          <meta name="description" content="Description of ListUsers" />
        </Helmet>
        <Header />
        <Container>
          <TitlePage />

          <HeaderTop>
            <Date />
          </HeaderTop>
          <ContentUsers>
            <Search
              data={data}
              handleRedirectAlbums={this.handleRedirectAlbums}
              toggleModal={this.toggleModal}
            />
            {/* {data.map(user => (
              <User
                key={user.id}
                {...user}
                handleRedirectAlbums={this.handleRedirectAlbums}
                toggleModal={this.toggleModal}
              />
            ))} */}
          </ContentUsers>
        </Container>

        {this.state.idSelected && (
          <Modal
            show={this.state.isOpen}
            onClose={this.toggleModal}
            toggleModal={this.toggleModal}
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
