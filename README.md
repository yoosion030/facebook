# facebook

오후두시랩 페이스북 코멘트 만들기 과제물입니다.

## 과제 구현 결과

### Get start

https://yoosion030.github.io/facebook/

```
$ git clone https://github.com/yoosion030/facebook.git
$ cd facebook
$ npm i
$ npm start
```

### Preview

**(1) 좋아요**  
<img src="https://cdn.discordapp.com/attachments/824148980657160205/1097317005079621682/2023-04-17__9_19_27_AdobeExpress.gif" width="500px" />

**(2) 댓글 입력/삭제**  
<img src="https://cdn.discordapp.com/attachments/824148980657160205/1097318740296749087/2023-04-17__9_30_13_AdobeExpress_1.gif" width="500px" />

**(3) 답글 입력/삭제**  
<img src="https://cdn.discordapp.com/attachments/824148980657160205/1097319795357134868/2023-04-17__9_34_36_AdobeExpress.gif" width="500px" />

## 과제 수행 과정

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
│  ├─ components
│  ├─ components
│  │  ├─ Header
│  │  ├─  └─ MainLayout.ts
│  │  ├─ Input
│  │  ├─  └─ OrderTable.tsx
│  │  ├─  └─ Pagenation.tsx
│  │  ├─ Post
│  │  ├─   └─ Comment
│  │  │    └─   └─ Reply
│  ├─ constant
│  │  └─ page.ts
│  ├─ context
│  │  └─ HomePage.tsx
│  ├─ style
│  │  └─ loader
│  ├─ types
│  │  └─ GlobalStyles.tsx
│  ├─ utils
│  │  └─ index.ts
│  ├─ index.tsx
└─ └─ App.tsx
```

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

**(2) 네이밍 컨벤션**

| Type            | Description   |
| --------------- | ------------- |
| 컴포넌트 폴더명 | 대문자로 시작 |
| 대표 폴더명     | 소문자로 시작 |
| 파일 이름       | 대문자로 시작 |
| 함수            | camel case    |
