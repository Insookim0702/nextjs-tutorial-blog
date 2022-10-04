import { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
export default function Write() {
  const title = useRef(undefined)
  const content = useRef(undefined)
  function onSubmit(event) {
    event.preventDefault()

    if (!title.current.value || !content.current.value) {
      alert('값을 입력하시오.')
      return
    }
    fetch('/api/write', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title.current.value,
        content: content.current.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Fetch Error')
      })
      .then((res) => {
        alert(res.message)
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <>
      <Head>
        <title>글쓰기</title>
      </Head>
      <header>글쓰기</header>
      <form onSubmit={onSubmit}>
        <h1>제목</h1>
        <input ref={title} />
        <h1>내용</h1>
        <textarea ref={content} />
        <br />
        <input type="submit" />
      </form>
      <Link href={`/posts/${title}`}>
        <a>해당 글 포스트보기</a>
      </Link>

      <Link href="/">
        <a>home</a>
      </Link>
    </>
  )
}
