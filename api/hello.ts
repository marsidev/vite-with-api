import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  hello: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400')
  return res.status(200).json({ hello: 'vercel' })
}
