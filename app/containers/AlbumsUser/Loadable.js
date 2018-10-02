/**
 *
 * Asynchronously loads the component for AlbumsUser
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
