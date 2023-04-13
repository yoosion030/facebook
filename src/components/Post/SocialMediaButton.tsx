import styled from '@emotion/styled';
import * as I from 'assets';
import { useState } from 'react';
import getStoredArray from 'utils/getStoredArray';

interface SocialMediaButtonProps {
  id: number;
}

const SocialMediaButton = ({ id }: SocialMediaButtonProps) => {
  const stringId = id.toString();
  const [isLike, setIsLike] = useState<boolean>(getStoredArray('likePosts').includes(stringId));

  const handleLike = () => {
    const likePosts = getStoredArray('likePosts');
    let updatedLikePosts: string[];
    if (isLike) {
      updatedLikePosts = likePosts.filter(v => v !== stringId);
    } else {
      updatedLikePosts = [...likePosts, stringId];
    }

    window.localStorage.setItem('likePosts', JSON.stringify(updatedLikePosts));
    setIsLike(!isLike);
  };

  return (
    <SocialMediaButtonLayout>
      <IconBox onClick={handleLike}>
        {isLike ? <I.BlueLikeIcon /> : <I.LikeIcon />}
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
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 16px;
  border-top: 1px solid #cccccc;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 50%;
  font-size: 15px;
  color: #65676b;
  cursor: pointer;
`;
