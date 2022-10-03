import { useRef } from 'react'
export default function write() {
  const title = useRef('')
  const content = useRef('')
  function onSubmit(event) {
    event.preventDefault()
    console.log(title.current.value)
    console.log(content.current.value)
  }

  return (
    <>
      <header>글쓰기</header>
      <form>
        <h1>제목</h1>
        <input ref={title} />
        <h1>내용</h1>
        <textarea ref={content} />
        <br />
        <input type="submit" onClick={onSubmit} />
      </form>
    </>
  )
}
