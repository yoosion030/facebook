import styled from '@emotion/styled';
import { Profile, Content, LikeCommentCount, SocialMediaButton, Comment } from 'components';
import { PostType } from 'types/Post';

const Post = () => {
  const posts: PostType[] = [
    {
      id: 1,
      profileImage:
        'https://image.rocketpunch.com/company/174836/2pmlab_logo_1658207689.png?s=40x40&t=inside',
      name: '오후두시랩',
      content: 'Tech for us and Earth 오후두시랩의 프론트엔드 개발을 함께하실 분을 모십니다.',
      contentImage:
        'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30425%2Fpenzqjfkccurvdrb__1080_790.jpg&w=680&q=75',
      createdAt: '4월 3일 오전 12:36',
    },
    {
      id: 2,
      profileImage:
        'https://image.rocketpunch.com/company/174836/2pmlab_logo_1658207689.png?s=40x40&t=inside',
      name: '오후두시랩',
      content: 'Tech for us and Earth 오후두시랩의 프론트엔드 개발을 함께하실 분을 모십니다.',
      createdAt: '4월 3일 오전 12:36',
    },
  ];

  return (
    <PageLayout>
      {posts.map(post => (
        <PostLayout key={post.id}>
          <Profile profileImage={post.profileImage} name={post.name} createdAt={post.createdAt} />
          <Content content={post.content} contentImage={post.contentImage ?? ''} />
          <LikeCommentCount />
          <SocialMediaButton id={post.id} />
          <Comment />
        </PostLayout>
      ))}
    </PageLayout>
  );
};

export default Post;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const PostLayout = styled.div`
  width: 680px;
  margin-bottom: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.17);
`;
