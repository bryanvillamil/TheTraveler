/**
 *
 * Asynchronously loads the component for ListUsers
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
