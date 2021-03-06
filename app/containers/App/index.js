/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import ListUsers from 'containers/ListUsers/Loadable';
import AlbumsUser from 'containers/AlbumsUser/Loadable';
import PhotosUser from 'containers/PhotosUser/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div className="contentApp">
      <Helmet titleTemplate="%s - The Traveler" defaultTitle="The Traveler">
        <meta name="description" content="The Traveler" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={ListUsers} />
        <Route path="/user/:id/albums" component={AlbumsUser} />
        <Route path="/:id/photos" component={PhotosUser} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
  );
}
