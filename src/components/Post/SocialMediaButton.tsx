import { useState } from 'react';
import * as I from 'assets';
import * as S from './style';
import getStoredArray from 'utils/getStoredArray';
import setLocalStorageArray from 'utils/setLocalStorageArray';
import { localStorageKeys } from 'constant/localStorageKeys';

interface SocialMediaButtonProps {
  id: string;
}

const SocialMediaButton = ({ id }: SocialMediaButtonProps) => {
  const [isLike, setIsLike] = useState<boolean>(getStoredArray(localStorageKeys.like).includes(id));

  const handleLike = () => {
    const likePosts = getStoredArray(localStorageKeys.like);
    const updatedLikePosts: string[] = isLike
      ? likePosts.filter((v: string) => v !== id)
      : [...likePosts, id];

    setLocalStorageArray(localStorageKeys.like, updatedLikePosts);
    setIsLike(!isLike);
  };

  return (
    <S.SocialMediaButtonLayout>
      <S.IconBox onClick={handleLike}>
        {isLike ? <I.BlueLikeIcon /> : <I.LikeIcon />}
        <p>좋아요</p>
      </S.IconBox>
      <S.IconBox>
        <I.CommentIcon />
        <p>댓글 달기</p>
      </S.IconBox>
    </S.SocialMediaButtonLayout>
  );
};

export default SocialMediaButton;
