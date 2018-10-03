/**
 *
 * Asynchronously loads the component for ItemUser
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
