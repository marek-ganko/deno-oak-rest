import { NetworkElement } from './network-elements.model.ts';

export const networkElements = [
  {
    id: '1',
    name: '532_MRBTS-12_TRIG-64',
    technology: 'Radio',
    device_type: 'eNodeB',
    status: 'Enabled',
    host: '127.0.0.1',
    software_version: '15614564-418464684',
    distinguished_name: '',
  },
  {
    id: '2',
    name: '092_MRBTS-1_TRIG-01',
    technology: 'Radio',
    device_type: 'WBTS',
    status: 'Disabled',
    host: '127.0.0.1',
    software_version: '1316961651-48949',
    distinguished_name: '',
  },
  {
    id: '3',
    name: '002_MRBTS-1_TTI-54',
    technology: 'Core',
    device_type: 'AMGW',
    status: 'Enabled',
    host: '127.0.0.1',
    software_version: '89486-496',
    distinguished_name: '',
  },
  {
    id: '4',
    name: '009_MRBTS-1_TTI-58',
    technology: 'Core',
    device_type: 'AMGW',
    status: 'Enabled',
    host: '127.0.0.1',
    software_version: '842549486-44296',
    distinguished_name: '',
  },
];

const networkElementsMap: Map<string, NetworkElement> = new Map();

networkElements.forEach((networkElement: NetworkElement) => networkElementsMap.set(networkElement.id, networkElement));

export default networkElementsMap;
