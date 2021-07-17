import { NextApiRequest, NextApiResponse } from 'next';
import { SiteClient } from 'datocms-client';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const client = new SiteClient(process.env.FULL_ACCESS_DATO_API_TOKEN);

    const { message, creatorSlug } = request.body;

    const newMessage = await client.items.create({
      itemType: process.env.DATO_MESSAGE_MODEL_ID,
      message,
      creatorSlug,
    });

    return response.json({ newMessage });
  }

  return response.status(405).json({
    message: 'Method not allowed',
  });
};
