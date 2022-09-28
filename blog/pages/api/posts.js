import { getSortedPostsData } from '../../src/lib/posts'

export default function handler(req, res) {
  const allPostsData = getSortedPostsData()
  res.status(200).json({ allPostsData })
}
