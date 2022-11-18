import type { NextApiRequest, NextApiResponse } from 'next'
import { getPostData } from '../../../src/lib/posts'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const result = await getPostData(id)
  res.status(200).json(result)
}

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   console.log(req)
//   // const result = await getPostData(req)
//   res.status(200).json({ name: 'John Doe' })
// }
