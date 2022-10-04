import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Write from '/pages/Write'
/**
 * @description CSR
 */
export default function WriteId() {
  const {
    query: { id },
    isReady,
  } = useRouter()

  useEffect(() => {
    if (!isReady) return
    console.log(id)
    fetch(`/posts/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      })
  }, [isReady])
  return (
    <>
      <Write />
    </>
  )
}
