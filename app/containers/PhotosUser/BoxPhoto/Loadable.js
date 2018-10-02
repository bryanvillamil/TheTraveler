/**
 *
 * Asynchronously loads the component for BoxPhoto
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
