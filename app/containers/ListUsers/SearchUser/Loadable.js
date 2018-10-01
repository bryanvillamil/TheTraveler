/**
 *
 * Asynchronously loads the component for SearchUser
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
