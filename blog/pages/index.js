import Head from 'next/head'
import Image from 'next/image'
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
      <Head>
        <title>인수의 블로그</title>
        <link rel="icon" href="/siba.png" />
      </Head>

      <main className={cssmodule.mainContainer}>
        <header>
          <div className={cssmodule.profileImg}>
            <Image src="/siba.png" width={140} height={140} />
          </div>
        </header>
        <div></div>

        <ul>
          {allPostsData.map(({ id, title, data }) => (
            <Link href={`/posts/${id}`}>
              <li key={id}>
                {id}
                <br />
                {title}
                <br />
                {data}
              </li>
            </Link>
          ))}
        </ul>
      </main>

      <Link href="/posts/sc-post">두번째 글로 이동</Link>
    </div>
  )
}
