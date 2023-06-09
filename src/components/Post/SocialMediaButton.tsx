import { useContext, useState } from 'react';
import * as I from 'assets';
import * as S from './style';
import { getStoredArray, setLocalStorageArray } from 'utils';
import { localStorageKeys } from 'constant/localStorageKeys';
import { CommentContext } from 'context/CommentProvider';

interface SocialMediaButtonProps {
  postId: string;
}

const SocialMediaButton = ({ postId }: SocialMediaButtonProps) => {
  const { handleTextareaFocus } = useContext(CommentContext);
  const [isLike, setIsLike] = useState<boolean>(
    getStoredArray(localStorageKeys.like).includes(postId),
  );

  const handleLike = () => {
    const likePosts = getStoredArray<string>(localStorageKeys.like);
    const updatedLikePosts: string[] = isLike
      ? likePosts.filter(postId => postId !== postId)
      : [...likePosts, postId];

    setLocalStorageArray(localStorageKeys.like, updatedLikePosts);
    setIsLike(!isLike);
  };

  return (
    <S.SocialMediaButtonLayout>
      <S.IconBox onClick={handleLike}>
        {isLike ? (
          <S.LikeAnimation>
            <I.BlueLikeIcon />
          </S.LikeAnimation>
        ) : (
          <I.LikeIcon />
        )}
        <p style={{ color: isLike ? `#065fd4` : `#65676b` }}>좋아요</p>
      </S.IconBox>
      <S.IconBox onClick={handleTextareaFocus}>
        <I.CommentIcon />
        <p>댓글 달기</p>
      </S.IconBox>
    </S.SocialMediaButtonLayout>
  );
};

export default SocialMediaButton;
