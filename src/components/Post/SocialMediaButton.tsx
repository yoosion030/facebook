import styled from '@emotion/styled';
import * as I from 'assets';
import getLikePosts from 'utils/getLikePosts';

interface SocialMediaButtonProps {
  id: number;
}

const SocialMediaButton = ({ id }: SocialMediaButtonProps) => {
  const handleLike = () => {
    const likePosts = getLikePosts();
    const updatedLikePosts = [...likePosts, id.toString()];
    window.localStorage.setItem('likePosts', JSON.stringify(updatedLikePosts));
  };

  return (
    <SocialMediaButtonLayout>
      <IconBox onClick={handleLike}>
        <I.LikeIcon />
        <p>좋아요</p>
      </IconBox>
      <IconBox>
        <I.CommentIcon />
        <p>댓글 달기</p>
      </IconBox>
    </SocialMediaButtonLayout>
  );
};

export default SocialMediaButton;

const SocialMediaButtonLayout = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-top: 1px solid #cccccc;
`;

const IconBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  color: #65676b;
  cursor: pointer;
`;
