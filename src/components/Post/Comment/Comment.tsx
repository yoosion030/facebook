import styled from '@emotion/styled';
import * as I from 'assets';

interface CommentProps {
  content: string;
}

const Comment = ({ content }: CommentProps) => {
  return (
    <CommentLayout>
      <I.ProfileIcon width={32} height={32} />
      <div>
        <ContentSection>{content}</ContentSection>
        <CommentAction>
          <Reply>답글 달기</Reply>
          <Delete>삭제</Delete>
        </CommentAction>
      </div>
    </CommentLayout>
  );
};

export default Comment;

const CommentLayout = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
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
