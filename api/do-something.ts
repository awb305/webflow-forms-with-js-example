import { VercelRequest, VercelResponse } from '@vercel/node';
export default async (request: VercelRequest, response: VercelResponse) => {
  try {
    const body = request.body;

    console.log('body', body);
    throw new Error('Something went wrong');

    response.status(200).json({ message: body });
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      response.status(500).json({ error: e.message });
    }
  }
};
