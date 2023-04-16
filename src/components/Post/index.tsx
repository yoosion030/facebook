import * as S from './style';
import { Profile, Content, SocialMediaButton, CommentList } from 'components';
import CommentProvider from 'context/CommentProvider';
import { PostType } from 'types/Post';

interface PostProps {
  posts: PostType[];
}

const Post = ({ posts }: PostProps) => {
  return (
    <S.PageLayout>
      {posts.map(post => {
        const stringId = post.id.toString();
        return (
          <CommentProvider postId={stringId} key={post.id}>
            <S.PostLayout>
              <Profile
                profileImage={post.profileImage}
                name={post.name}
                createdAt={post.createdAt}
              />
              <Content content={post.content} contentImage={post.contentImage ?? ''} />
              <SocialMediaButton postId={stringId} />
              <CommentList />
            </S.PostLayout>
          </CommentProvider>
        );
      })}
    </S.PageLayout>
  );
};

export default Post;
