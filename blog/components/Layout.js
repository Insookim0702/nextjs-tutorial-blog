import layout from './layout.module.css'
import Head from 'next/head'
import Image from 'next/image'
export default function Layout({ children }) {
  return (
    <div className={layout.container}>
      <Head>
        <title>인수의 블로그</title>
        <link rel="icon" href="/siba.png" />
      </Head>
      <header>
        <div className={layout.profileImg}>
          <Image src="/siba.png" width={140} height={140} />
        </div>
      </header>
      <main className={layout.main}>{children}</main>
      <footer>
          i'm a boy
      </footer>
    </div>
  )
}
