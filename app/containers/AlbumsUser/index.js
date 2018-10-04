/**
 *
 * AlbumsUser
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { findIndex } from 'lodash';

import TitlePage from 'components/TitlePage';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Box from './BoxAlbum';
import makeSelectAlbumsUser from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getInfo } from './actions';

import { ContentAlbums, Container } from './styledComponents';

/* eslint-disable react/prefer-stateless-function */
export class AlbumsUser extends React.PureComponent {
  componentWillMount() {
    const {
      match: {
        params: { id },
      },
      history,
    } = this.props;

    if (!id) {
      history.goBack();
    }
  }

  componentDidMount() {
    const {
      getInfoData,
      match: {
        params: { id },
      },
    } = this.props;
    getInfoData(id);
  }

  handleRedirectPhotos = id => {
    const {
      history: { push },
      albumsuser: { data },
    } = this.props;

    const userPhotos = findIndex(data, { id });
    if (userPhotos !== -1) {
      const Username = data[userPhotos].name;
      push(`/${id}/photos`, {
        Username,
      });
    }
  };

  render() {
    const {
      history: {
        location: {
          state: { Username },
        },
      },
      albumsuser: { data },
    } = this.props;

    return (
      <Container>
        <Helmet>
          <title>{`Album ${Username}`}</title>
        </Helmet>

        <TitlePage title={`album of ${Username}`} />

        <ContentAlbums>
          {data &&
            data.map(album => (
              <Box
                key={album.id}
                {...album}
                handleRedirectPhotos={this.handleRedirectPhotos}
              />
            ))}
        </ContentAlbums>
      </Container>
    );
  }
}

AlbumsUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  getInfoData: PropTypes.func.isRequired,
  albumsuser: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  albumsuser: makeSelectAlbumsUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getInfoData: userId => dispatch(getInfo(userId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'albumsUser', reducer });
const withSaga = injectSaga({ key: 'albumsUser', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AlbumsUser);
