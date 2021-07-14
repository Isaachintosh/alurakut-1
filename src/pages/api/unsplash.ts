import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const responseAxios = await axios.get('https://api.unsplash.com/photos', {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  });

  return response.json({
    photos: responseAxios.data.map((photo) => photo.urls.small),
  });
};
