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

import TitlePage from 'components/TitlePage';
import Box from './BoxPhoto';

import makeSelectPhotosUser from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPhoto } from './actions';

import { ContentPhotos } from './styledComponents';

/* eslint-disable react/prefer-stateless-function */
export class PhotosUser extends React.PureComponent {
  componentDidMount() {
    const {
      getPhotoData,
      match: {
        params: { id },
      },
    } = this.props;
    getPhotoData(id);
  }

  render() {
    const {
      photosuser: { photos },
    } = this.props;

    return (
      <div>
        <Helmet>
          <title>Photos User</title>
        </Helmet>

        <TitlePage title="Photos" />
        <ContentPhotos>
          {photos && photos.map(photo => <Box key={photo.id} {...photo} />)}
        </ContentPhotos>
      </div>
    );
  }
}

PhotosUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getPhotoData: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
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
