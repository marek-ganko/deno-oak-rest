import { Context, Status, helpers } from 'https://deno.land/x/oak/mod.ts';
import { v4 as uuid } from 'https://deno.land/std/uuid/mod.ts';
import networkElements from './network-elements.mock.ts';
import { NetworkElement } from './network-elements.model.ts';
import { notFound } from '../../middleware/routing.ts';

export const getNetworkElements = (context: Context) => {
  context.response.body = Array.from(networkElements.values());
};

export const addNetworkElement = async (context: Context) => {
  if (!context.request.hasBody) {
    context.throw(Status.BadRequest, 'Bad Request');
  }
  const body = context.request.body();

  const networkElement: Partial<NetworkElement> | undefined = await body.value;

  if (networkElement) {
    networkElement.id = uuid.generate();
    networkElements.set(networkElement.id, networkElement as NetworkElement);
    context.response.status = Status.OK;
    context.response.body = networkElement;
    context.response.type = 'json';
    return;
  }

  context.throw(Status.BadRequest, 'Bad Request');
};

export const getOneNetworkElement = async (context: Context) => {
  const params = helpers.getQuery(context, { mergeParams: true });

  if (!networkElements.has(params.id!)) {
    return notFound(context);
  }

  context.response.body = networkElements.get(params.id!);
};
