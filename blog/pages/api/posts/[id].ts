import { getPostData } from '../../../src/lib/posts'

export default async function handler(req, res) {
  console.log(req)
  const result = await getPostData(req.id)
  await res.status(200).json({ result })
}
