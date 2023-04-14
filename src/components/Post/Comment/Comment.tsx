import styled from '@emotion/styled';
import * as I from 'assets';
import { CommentContext } from 'context/CommentProvider';
import { useContext } from 'react';
import ReplyList from './Reply/ReplyList';

interface CommentProps {
  comment: string;
  commentId: number;
}

const Comment = ({ comment, commentId }: CommentProps) => {
  const { deleteComment } = useContext(CommentContext);
  const handleDeleteComment = () => {
    deleteComment(commentId);
  };
  return (
    <div>
      <CommentLayout>
        <I.ProfileIcon width={32} height={32} />
        <div>
          <ContentSection>{comment}</ContentSection>
          <CommentAction>
            <Reply>답글 달기</Reply>
            <Delete onClick={handleDeleteComment}>삭제</Delete>
          </CommentAction>
        </div>
      </CommentLayout>
      <ReplyList />
    </div>
  );
};

export default Comment;

const CommentLayout = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const ContentSection = styled.section`
  padding: 12px 12px;
  font-size: 15px;
  color: #050505;
  background-color: #f0f2f5;
  border-radius: 8px;
  white-space: pre-wrap;
`;

const CommentAction = styled.div`
  display: flex;
  gap: 10px;
  height: 20px;
  margin-left: 12px;
  font-size: 12px;

  p {
    font-weight: 700;
    line-height: 20px;
    cursor: pointer;
  }
`;

const Reply = styled.p`
  color: #65676b;
`;

const Delete = styled.p`
  color: #ff0000;
`;
