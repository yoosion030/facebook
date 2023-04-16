import { Header, Post } from 'components';
import { PostType } from 'types/Post';

function App() {
  const posts: PostType[] = [
    {
      id: 0,
      profileImage:
        'https://image.rocketpunch.com/company/174836/2pmlab_logo_1658207689.png?s=40x40&t=inside',
      name: '오후두시랩',
      content: 'Tech for us and Earth 오후두시랩의 프론트엔드 개발을 함께하실 분을 모십니다.',
      contentImage:
        'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30425%2Fpenzqjfkccurvdrb__1080_790.jpg&w=680&q=75',
      createdAt: '4월 3일 오전 12:36',
    },
    {
      id: 1,
      profileImage:
        'https://image.rocketpunch.com/company/174836/2pmlab_logo_1658207689.png?s=40x40&t=inside',
      name: '오후두시랩',
      content: 'Tech for us and Earth 오후두시랩의 프론트엔드 개발을 함께하실 분을 모십니다.',
      createdAt: '4월 3일 오전 12:36',
    },
  ];
  return (
    <>
      <Header />
      <Post posts={posts} />
    </>
  );
}

export default App;
