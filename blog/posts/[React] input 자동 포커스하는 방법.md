---
title: '[React] input 자동 포커스하는 방법'
date: '2022-10-18'
---

mui를 사용하고 있기때문에,


mui의 <TextField>를 사용한다. TextField 옵션중에 `autoFocus`가 있다. 속성을 추가하니, 바로 자동으로 포커스되었다.

```

<TextField
        fullWidth
        autoFocus
        placeholder="할 일 정하기"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setContent(e.target.value)
        }
        value={content}
        onKeyDown={handleOnKeyPress}
/>

```
  