/**
 *
 * SearchUser
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import SearchInput, { createFilter } from 'react-search-input';
import User from '../ItemUser';

import { ContentSearchUsers } from './styledComponents';

// const KEYS_TO_FILTERS = ['email', 'name', 'id']
const KEYS_TO_FILTERS = ['email'];

/* eslint-disable react/prefer-stateless-function */
class SearchUser extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  render() {
    const { data, handleRedirectAlbums, toggleModal } = this.props;

    const filteredEmails = data.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS),
    );

    return (
      <ContentSearchUsers>
        <SearchInput className="search-input" onChange={this.searchUpdated} />

        {filteredEmails.map(user => (
          <User
            key={user.id}
            {...user}
            handleRedirectAlbums={handleRedirectAlbums}
            toggleModal={toggleModal}
          />
        ))}
      </ContentSearchUsers>
    );
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }
}

SearchUser.propTypes = {
  data: PropTypes.array,
  handleRedirectAlbums: PropTypes.func,
  toggleModal: PropTypes.func,
};

export default SearchUser;
