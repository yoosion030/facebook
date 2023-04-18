# facebook

오후두시랩 페이스북 코멘트 만들기 과제물입니다.

## 과제 구현 결과

https://yoosion030.github.io/facebook/

```
$ git clone https://github.com/yoosion030/facebook.git
$ cd facebook
$ npm i
$ npm start
```

### Preview

**(1) 좋아요**  
<img src="https://cdn.discordapp.com/attachments/824148980657160205/1097792243437420574/ezgif.com-video-to-gif.gif" alt="좋아요" width="400px" />

**(2) 댓글 입력/삭제**  
<img src="https://cdn.discordapp.com/attachments/824148980657160205/1097797022721003520/ezgif.com-video-to-gif_1.gif" width="400px" />

**(3) 답글 입력/삭제**  
<img src="https://cdn.discordapp.com/attachments/824148980657160205/1097807087247040594/ezgif.com-video-to-gif_2.gif" width="400px" />

### 사용 기술

<div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" />
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/cra-61DAFB?style=for-the-badge&logo=createreactapp&logoColor=white" />
  <img src="https://img.shields.io/badge/-Emotion-orange?style=for-the-badge">
</div>
 
<div style='margin-top:10px;'>  
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white" /> 
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white" /> 
  <img src="https://img.shields.io/badge/Github%20Pages-gray?style=for-the-badge" />
</div>
<br>

### 파일 구조

```
📦
├─ public
│  ├─ favicon
│  └─ index.html
├─ src
│  ├─ assets
│  │  ├─ Common
│  │  ├─ Header
│  │  └─ SocialMediaButton
│  ├─ components
│  │  ├─ Header
│  │  ├─ Textarea
│  │  ├─ Post
│  │  │    ├─ Comment
│  │  │    │   └─ Reply
│  │  │    ├─  Content
│  │  │    ├─  Profile
│  │  └─   └─  SocialMediaButton
│  ├─ constant
│  │  └─ localStorageKeys.ts
│  ├─ context
│  │  └─ CommentProvider.tsx
│  ├─ style
│  │  └─ GlobalStyles
│  ├─ types
│  │  ├─ Comment
│  │  ├─ Post
│  │  └─ Textarea
│  ├─ utils
│  │  ├─ getStoredArray
│  │  ├─ setLocalStorageArray
│  │  └─ index.ts
│  ├─ App.tsx
└─ └─ index.tsx
```

### 컴포넌트 구조

<img src="https://cdn.discordapp.com/attachments/824148980657160205/1097724013658247219/image.png" width="400px"/>

## 과제 구현 과정

### 트러블 슈팅

<details>
  <summary><b>(1) 댓글에서 한글 입력 시 함수가 두 번 실행되는 에러</b></summary>
  <br />
  <div markdown="1">

한글의 경우 자음과 모음의 조합으로 한 음절이 만들어지는 조합 문자이기 때문에 글자가 조합 중인지, 조합이 끝난 상태인지를 알 수 없습니다. 이에 따라 키보드 이벤트에는 `isComposing` 이라는 입력 문자가 조합 문자인지 아닌지를 boolean값으로 반환하는 프로퍼티가 있습니다. <br/>
`isComposing은` 입력 이벤트가 아직 완료되지 않았음을 나타내는 속성입니다. 예를 들어, 한글 입력 시 `isComposing` 속성은 true로 설정되어 한글이 완성되기 전까지 이벤트가 완료되지 않음을 알려줍니다.

- Before

```ts
const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    handleComment(event);
  }
};
```

그래서 코드에 `isComposing`이 `false`일 때만 함수가 실행되게 하여 `isComsing`이 `true`일 때, 즉 글자가 조합되는 과정에 발생하는 이벤트는 무시하게 처리하였습니다.

- After

```ts
const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
  if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
    event.preventDefault();
    handleComment(event);
  }
};
```

</div>
</details>

<details>
  <summary><b>(2) 댓글 추가 시 아이디가 중복되는 에러</b></summary>
  <br />
  <div markdown="1">

댓글을 추가하고 삭제하는 것을 반복하다가 갑자기 동시에 두 개의 댓글이 삭제되는 현상을 발견하였습니다. 찾아보니 key를 `commentId로` 설정하였는데 `commentId가` 중복되어 발생한 문제였습니다. 추가할 때 `commetId를` 댓글 배열의 길이로 설정하게 하였는데 이렇게 하게 되면 삭제 후 다시 추가할 때 배열 길이가 원상 복귀된 것이니 중복 key가 발생하였습니다.

- Before

```ts
// 추가 로직
const addData = [{ comment: action.comment, commentId: action.commentId }];
// 추가 요청
addComment(comment, comments.length);
```

그래서 2가지 방법을 생각했습니다.

1.  commentId를 Date로 준다.
2.  commentId의 최댓값에서 +1 한 값을 준다.

새로운 날짜로 구별하는 것이 더 구현하기 쉽지만, id를 구별하기에는 숫자가 더 나을 것 같아 2번 방식을 채택하였습니다.

- After

```ts
const maxCommentId = Math.max(...state.map(comment => comment.commentId), 0);
const newComment = {
  commentId: maxCommentId + 1,
};
```

  </div>
</details>

## Rules

**(1) 커밋 메세지 컨벤션**

| Type     | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
| Add      | 파일 추가                                                                      |
| Update   | 파일 수정                                                                      |
| Feature  | 기능 추가                                                                      |
| Fix      | 버그 수정                                                                      |
| Refactor | 코드 리팩토링                                                                  |
| Style    | 코드 스타일 및 포맷 변경(코드 자체의 변경은 없는 경우, 함수/ 변수명 변경 포함) |
| Delete   | 파일 삭제                                                                      |

<br/>

**(2) 네이밍 컨벤션**

| Type            | Description |
| --------------- | ----------- |
| 컴포넌트 폴더명 | pascal case |
| 대표 폴더명     | lower case  |
| 파일 이름       | pascal case |
| 함수            | camel case  |
