import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
// import { getSortedPostsData } from '../lib/posts'

// export function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData,
//     },
//   }
// }

export default function Home() {
  const [allPostsData, setAllPostsData] = useState([])
  useEffect(() => {
    fetch('api/posts')
      .then((res) => res.json())
      .then((data) => setAllPostsData(data.allPostsData))
  }, [])
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/public/siba.png" />
        <Image src="/public/siba.png" width={140} height={140} />
        <Link href="/posts/first-post">첫번째 글로 이동</Link>
        <Link href="/posts/pre-rendering">pre-rendering</Link>
        <Link href="/posts/ssg-ssr">ssg-ssr</Link>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ul>
          {allPostsData.map(({ id, title, data }) => (
            <li key={id}>
              {id}
              <br />
              {title}
              <br />
              {data}
            </li>
          ))}
        </ul>
      </main>

      <Link href="/posts/sc-post">두번째 글로 이동</Link>
    </div>
  )
}
