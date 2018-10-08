/**
 *
 * Asynchronously loads the component for ModalPhoto
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
