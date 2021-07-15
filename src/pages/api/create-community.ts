import { NextApiRequest, NextApiResponse } from 'next';
import { SiteClient } from 'datocms-client';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const client = new SiteClient(process.env.FULL_ACCESS_DATO_API_TOKEN);

    const { title, imageUrl, creatorSlug } = request.body;

    const newCommunity = await client.items.create({
      itemType: process.env.DATO_COMMUNITY_MODEL_ID,
      title,
      imageUrl,
      creatorSlug,
    });

    return response.json({ newCommunity });
  }

  return response.status(405).json({
    message: 'Method not allowed',
  });
};
