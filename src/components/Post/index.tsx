import styled from '@emotion/styled';
import Content from './content';
import Profile from './profile';

const Post = () => {
  return (
    <PageLayout>
      <PostLayout>
        <Profile />
        <Content />
      </PostLayout>
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
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.17);
`;
