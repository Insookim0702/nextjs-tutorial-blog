import { format } from 'date-fns'
import { createPost } from '../../src/lib/posts'

export default async function handler(req, res) {
  const { title, content } = req.body
  try {
    await createPost({ title, content, date: format(new Date(), 'yyyy-MM-dd') })
    res.status(200).json({ message: 'create success' })
  } catch (error) {
    res.status(500).json({ error: 'create error' })
  }
}
