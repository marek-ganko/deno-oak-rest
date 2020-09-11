import { Router } from 'https://deno.land/x/oak/mod.ts';
import { applyGraphQL } from 'https://deno.land/x/oak_graphql/mod.ts';
import typeDefs from './schema.ts';
import resolvers from './resolvers.ts';

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs,
  resolvers,
});

export default GraphQLService;
