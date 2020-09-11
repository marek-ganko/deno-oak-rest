import { gql } from 'https://deno.land/x/oak_graphql/mod.ts';

const types = (gql as any)`
type NetworkElement {
  id: String
  name: String
  technology: String
  device_type: String
  status: String
  host: String
  software_version: String
  distinguished_name: String
}

input NetworkElementInput {
  name: String
  technology: String
  device_type: String
  status: String
  host: String
  software_version: String
  distinguished_name: String
}

type ResolveType {
  done: Boolean
}

type Query {
  getNetworkElement(id: String): NetworkElement 
}

type Mutation {
  setNetworkElement(input: NetworkElementInput!): ResolveType!
}
`;

export default types;
