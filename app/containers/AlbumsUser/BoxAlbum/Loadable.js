/**
 *
 * Asynchronously loads the component for BoxAlbum
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
