import styled from '@emotion/styled';
import * as I from 'assets';

const Comment = () => {
  return (
    <CommentLayout>
      <I.ProfileIcon width={32} height={32} />
      <CommentInput placeholder='댓글을 입력하세요...' />
    </CommentLayout>
  );
};

export default Comment;

const CommentLayout = styled.div`
  display: flex;
  gap: 10px;
  padding: 8px 16px;
  border-top: 1px solid #cccccc;
`;

const CommentInput = styled.input`
  width: 100%;
  padding: 0 8px;
  background-color: #f0f2f5;
  border: none;
  border-radius: 12px;
`;
