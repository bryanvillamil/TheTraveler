/**
 *
 * PhotosUser
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { findIndex } from 'lodash';
import { Link } from 'react-router-dom';

import TitlePage from 'components/TitlePage';
import Icons from 'components/Icons';
import Box from './BoxPhoto';
import Modal from './ModalPhoto';

import makeSelectPhotosUser from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPhoto } from './actions';

import { ContentPhotos, LinkBack } from './styledComponents';

/* eslint-disable react/prefer-stateless-function */
export class PhotosUser extends React.PureComponent {
  state = {
    photoDataSelected: null,
  };

  componentDidMount() {
    const {
      getPhotoData,
      match: {
        params: { id },
      },
    } = this.props;
    getPhotoData(id);
  }

  openModal = id => {
    const {
      photosuser: { photos },
    } = this.props;

    const photoId = findIndex(photos, { id });
    if (photoId !== -1) {
      const photoInfo = photos[photoId];
      this.setState({
        photoDataSelected: photoInfo,
      });
    }
  };

  closeModal = () => {
    this.setState({
      photoDataSelected: null,
    });
  };

  backAlbums = () => {
    const {
      history,
      location: {
        state: { Username },
      },
    } = this.props;
    history.goBack();
    history.push({
      Username,
    });
  };

  render() {
    const {
      photosuser: { photos },
    } = this.props;

    const { photoDataSelected } = this.state;

    return (
      <div>
        <Helmet>
          <title>Photos User</title>
        </Helmet>

        <TitlePage title="Photos" />

        <LinkBack>
          <Link to="/" className="urlPathHome" title="Home">
            <Icons iconName="home" height="26" width="26" />
          </Link>
          <button
            className="urlPathAlbums"
            onClick={this.backAlbums}
            title="Albums"
          >
            <Icons iconName="album" height="26" width="26" />
          </button>
        </LinkBack>
        <ContentPhotos>
          {photos &&
            photos.map(photo => (
              <Box key={photo.id} {...photo} openModal={this.openModal} />
            ))}
        </ContentPhotos>

        {photoDataSelected && (
          <Modal
            show={this.state.isOpen}
            onClose={this.closeModal}
            {...photoDataSelected}
          />
        )}
      </div>
    );
  }
}

PhotosUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getPhotoData: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  photosuser: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  photosuser: makeSelectPhotosUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getPhotoData: userId => dispatch(getPhoto(userId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'photosUser', reducer });
const withSaga = injectSaga({ key: 'photosUser', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PhotosUser);
