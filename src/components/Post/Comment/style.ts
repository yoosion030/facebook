import styled from '@emotion/styled';

export const CommentListLayout = styled.div`
  display: flex;
  gap: 10px;
  padding: 8px 16px;
  border-top: 1px solid #cccccc;
`;

export const CommentForm = styled.form`
  width: 100%;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 32px;
  padding: 8px 12px;
  margin-bottom: 20px;
  background-color: #f0f2f5;
  border: none;
  border-radius: 12px;
  resize: none;
`;

export const CommentLayout = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ContentSection = styled.section`
  padding: 12px 12px;
  font-size: 15px;
  color: #050505;
  background-color: #f0f2f5;
  border-radius: 8px;
  white-space: pre-wrap;
`;

export const CommentAction = styled.div`
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

export const Reply = styled.p`
  color: #65676b;
`;

export const Delete = styled.p`
  color: #ff0000;
`;
