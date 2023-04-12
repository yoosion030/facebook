import styled from '@emotion/styled';
import * as I from 'assets';

const LikeCommentCount = () => {
  return (
    <LikeCommentCountLayout>
      <div>
        <I.LikeCountIcon />
        <Count>27</Count>
      </div>
      <div>
        댓글<Count>24개</Count>
      </div>
    </LikeCommentCountLayout>
  );
};

const LikeCommentCountLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  padding: 0 16px;
  color: #65676b;
  font-size: 15px;

  & > div {
    display: flex;
    align-items: center;
  }
`;

const Count = styled.p`
  display: inline-block;
  color: #65676b;
  font-size: 15px;
  margin-left: 5px;
  line-height: 18px;
`;

export default LikeCommentCount;
