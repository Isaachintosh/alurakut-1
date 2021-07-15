import { NextApiRequest, NextApiResponse } from 'next';
import { datoApi } from 'services/datoApi';
import { QUERY_COMMUNITIES } from 'graphql/queries/communities';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const data = await datoApi.post(QUERY_COMMUNITIES, {
    headers: {
      Authorization: `Bearer ${process.env.READ_ONLY_DATO_API_TOKEN}`,
    },
  });

  return response.json(data);
};
