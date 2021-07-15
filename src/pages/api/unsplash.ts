import { NextApiRequest, NextApiResponse } from 'next';
import { unsplashApi } from 'services/unsplashApi';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const responseAxios = await unsplashApi.get('photos', {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  });

  return response.json({
    photos: responseAxios.data.map((photo) => photo),
  });
};
