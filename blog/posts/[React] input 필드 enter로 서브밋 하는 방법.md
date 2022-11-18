---
title: '[React] input 필드 enter로 서브밋 하는 방법'
date: '2022-10-19'
---

영어는 1byte
한글은 2byte

String.prototype.split은 UTF-16 코드 단위로 문자를 구분해준다.
Emoji는 UTF-8임


React에서 input field에 enter 이벤트를 감지해서 서브밋을 하는 방법
`onKeyPress` 이벤트를 사용하면 된다.
```
function NewContent() {
  function handleSubmit() {
    // 서브밋
  }
  
  return (
    <>
      <input onChange="" onKeyPress={(e) => e.key === 'Enter' ?  handleSubmit: null}/>
      <button onClick={handleSubmit}>제출</button>
    </>
)

}

```
  