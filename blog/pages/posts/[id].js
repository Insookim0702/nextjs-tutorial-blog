import { useRouter } from 'next/router'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '/src/lib/posts'
import Date from '/components/Date.js'
import Link from 'next/link'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
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
  const { id: postId, title, data, date } = postData
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <h1>{id}</h1>
        {/* 날짜: <Date dateString={date} /> */}
        날짜: {date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>

      <Link href={`/write/${postId}`}>
        <a>수정하기</a>
      </Link>
    </>
  )
}
