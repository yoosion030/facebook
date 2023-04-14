import styled from '@emotion/styled';

export const ReplyLayout = styled.div``;

export const Reply = styled.div`
  display: flex;

  gap: 12px;
  height: 52px;
  padding-left: 42px;
`;

export const ReplyComment = styled.div`
  height: 80%;
  padding: 8px 12px;
  background-color: #f0f2f5;
  border-radius: 8px;
`;

export const ReplyInput = styled.textarea`
  width: 100%;
  height: 32px;
  padding: 8px 12px;
  margin-bottom: 20px;
  background-color: #f0f2f5;
  border: none;
  border-radius: 12px;
  resize: none;
`;
