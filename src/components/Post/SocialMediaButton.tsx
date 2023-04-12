import styled from '@emotion/styled';
import * as I from 'assets';

const SocialMediaButton = () => {
  return (
    <SocialMediaButtonList>
      <IconBox>
        <I.LikeIcon />
        <p>좋아요</p>
      </IconBox>
      <IconBox>
        <I.CommentIcon />
        <p>댓글 달기</p>
      </IconBox>
    </SocialMediaButtonList>
  );
};

export default SocialMediaButton;

const SocialMediaButtonList = styled.div`
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
