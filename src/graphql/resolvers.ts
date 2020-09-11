import networkElements from '../resources/network-elements/network-elements.mock.ts';

const resolvers = {
  Query: {
    getNetworkElement: (parent: any, { id }: any, context: any, info: any) => {
      return networkElements.get(id);
    },
  },
  Mutation: {
    setNetworkElement: (
      parent: any,
      { input: { name, technology, device_type, status, host, software_version, distinguished_name } }: any,
      context: any,
      info: any,
    ) => {
      return {
        done: true,
      };
    },
  },
};

export default resolvers;
