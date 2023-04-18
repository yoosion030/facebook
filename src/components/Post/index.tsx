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
        const { id, profileImage, name, createdAt, content, contentImage } = post;
        const stringId = id.toString();
        return (
          <CommentProvider postId={stringId} key={id}>
            <S.PostLayout>
              <Profile profileImage={profileImage} name={name} createdAt={createdAt} />
              <Content content={content} contentImage={contentImage ?? ''} />
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
