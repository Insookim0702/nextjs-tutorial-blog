import { useRouter } from 'next/router'
import { getAllPostIds, getPostData } from '/src/lib/posts'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  console.log(postData)
  return {
    props: {
      postData,
    },
  }
}
export default function Id({ postData }) {
  const router = useRouter()
  const { id } = router.query
  const { id: postId, title, data } = postData
  return (
    <>
      <h1>{id}</h1>

      {postId}
      <br />
      {title}
      <br />
      {data}
    </>
  )
}
