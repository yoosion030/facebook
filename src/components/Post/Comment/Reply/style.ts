import styled from '@emotion/styled';

export const Reply = styled.div`
  display: flex;
  gap: 12px;
  padding-left: 42px;
  margin-bottom: 10px;
`;

export const ReplyComment = styled.div`
  padding: 12px;
  font-size: 15px;
  color: #050505;
  background-color: #f0f2f5;
  border-radius: 8px;
  white-space: pre-wrap;
`;

export const ReplyAction = styled.div`
  gap: 10px;

  p {
    margin-left: 12px;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    cursor: pointer;
  }
`;

export const Delete = styled.p`
  color: #ff0000;
`;
