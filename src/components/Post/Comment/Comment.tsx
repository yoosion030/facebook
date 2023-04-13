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
        <Reply>답글 달기</Reply>
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

export const ContentSection = styled.section`
  padding: 12px 12px;

  font-size: 15px;
  color: #050505;
  background-color: #f0f2f5;
  border-radius: 8px;
  white-space: pre-wrap;
`;

export const Reply = styled.p`
  font-size: 12px;
  color: #65676b;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  margin-left: 12px;
`;
