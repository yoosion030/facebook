import { Header, Post } from 'components';
import { PostType } from 'types/Post';

function App() {
  const posts: PostType[] = [
    {
      id: 1,
      profileImage:
        'https://image.rocketpunch.com/company/174836/2pmlab_logo_1658207689.png?s=40x40&t=inside',
      name: '오후두시랩',
      content:
        '오후두시랩의 프론트엔드 개발을 함께하실 분을 모십니다.\n\n우리는 지구의 내일이 곧 내 일이라는 생각으로, 세상에 꼭 필요한 변화를 위해 도전합니다.\n건강하고 안전한 사람들의 일상과 깨끗하고 밝은 지구 환경을 만드는 프로젝트를 개발하고 있습니다.\n상상만 해도 가슴 벅찬 오두랩의 기술과 서비스, 그 미래를 소개합니다.',
      contentImage:
        'https://static.wanted.co.kr/images/company/30425/pxbpcunlxrb6ikdn__1080_790.jpg',
      createdAt: '4월 3일 오전 12:36',
    },
    {
      id: 2,
      profileImage:
        'https://image.rocketpunch.com/company/174836/2pmlab_logo_1658207689.png?s=40x40&t=inside',
      name: '오후두시랩',
      content: `기술로 따뜻한 세상을 만듭니다. \nTech for us and Earth`,
      contentImage:
        'https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210303_239%2F1614739077169uneep_JPEG%2F5zz1eXvGhMu2Z0gsfpSj_251.jpg',
      createdAt: '4월 3일 오전 12:36',
    },

    {
      id: 3,
      profileImage:
        'https://image.rocketpunch.com/company/174836/2pmlab_logo_1658207689.png?s=40x40&t=inside',
      name: '오후두시랩',
      content:
        '지구의 내일이 곧 내 일,\n\n\n우리는 스스로 가장 효율적으로 일할 수 있는 업무 환경과 기업 문화를 만들고 보다 큰 목표에 집중합니다.\n탁월한 인재들이 모인 조직은 자유가 주어졌을 때 더 주도적이고 책임감 있게 행동할 수 있다고 믿습니다.\n최소한의 규칙으로 출발하여 회사가 성장해나가는 여정에서 필요한 것들을 함께 논의하며 매 순간 우리에게\n가장 중요하다고 생각하는 것들로 오두랩만의 문화를 만들어나갑니다.',
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
