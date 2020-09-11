import { addNetworkElement, getNetworkElements, getOneNetworkElement } from './network-elements.controller.ts';
import router from '../../router.ts';

router
  .get('/network-elements', getNetworkElements)
  .post('/network-elements', addNetworkElement)
  .get<{ id: string }>('/network-elements/:id', getOneNetworkElement);

export default router;
