import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';

const endpoint = 'https://graphql.datocms.com';

export const datoApi = {
  post: async (query: string, options?: RequestInit) => {
    const graphQLClient = new GraphQLClient(endpoint, options);

    const data = await graphQLClient.request(query);

    return data;
  },
};
