/**
 *
 * SearchUser
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import SearchInput, { createFilter } from 'react-search-input';
import Date from '../Date';
import User from '../ItemUser';

import { ContentSearchUsers, SearchTop } from './styledComponents';

// const KEYS_TO_FILTERS = ['email', 'name', 'id']
const KEYS_TO_FILTERS = ['email'];

/* eslint-disable react/prefer-stateless-function */
class SearchUser extends React.PureComponent {
  state = {
    searchTerm: '',
  };

  searchUpdated = term => {
    this.setState({ searchTerm: term });
  };

  render() {
    const { data, handleRedirectAlbums, openModal } = this.props;

    const { searchTerm } = this.state;

    const filteredEmails = data.filter(
      createFilter(searchTerm, KEYS_TO_FILTERS),
    );

    const arrayUsersEmails = filteredEmails.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
    });

    return (
      <ContentSearchUsers>
        <SearchTop>
          <SearchInput className="search-input" onChange={this.searchUpdated} />
          <Date />
        </SearchTop>

        {arrayUsersEmails.map(user => (
          <User
            key={user.id}
            {...user}
            handleRedirectAlbums={handleRedirectAlbums}
            openModal={openModal}
          />
        ))}
      </ContentSearchUsers>
    );
  }
}

SearchUser.propTypes = {
  data: PropTypes.array,
  handleRedirectAlbums: PropTypes.func,
  openModal: PropTypes.func,
};

export default SearchUser;
