import Link from 'next/link'
import cssmodule from './index.module.css'
import { getSortedPostsData } from '../src/lib/posts'

export function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <main className={cssmodule.mainContainer}>
        <div></div>

        <ul>
          {allPostsData.map(({ id, title, data }) => (
            <Link href={`/posts/${id}`} key={id}>
              <li>
                아이디: {id}
                <br />
                제목: {title}
                <br />
                {data}
              </li>
            </Link>
          ))}
        </ul>
      </main>
      <Link href="/write">글쓰기</Link>
      <br />
      <Link href="/posts/sc-post">두번째 글로 이동</Link>
    </div>
  )
}
