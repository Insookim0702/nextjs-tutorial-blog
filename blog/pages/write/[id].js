import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Write from '/pages/Write'
/**
 * @description CSR
 */
export default function WriteId() {
  const {
    query: { id },
    isReady,
  } = useRouter()
  const [postData, setPostData] = useState(null)

  useEffect(() => {
    if (!isReady) return
    fetch(`/posts/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
          // return res
        }
        throw new Error('Fetch Error')
      })
      .then((res) => {
        console.log('????', res)
        setPostData(res)
        console.log('writeId', postData)
      })
  }, [isReady])
  return <>{postData ? <Write postData={postData} /> : <div>Loading...</div>}</>
}
