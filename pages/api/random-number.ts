// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  value: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.status(200).json({ value: randomNumber });
}
