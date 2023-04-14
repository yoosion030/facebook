import styled from '@emotion/styled';
import * as I from 'assets';

const ReplyList = () => {
  const replys = [
    { replyId: 0, comment: 's' },
    { replyId: 1, comment: '1' },
  ];
  return (
    <ReplyLayout>
      {replys.map(reply => (
        <Reply key={reply.replyId}>
          <I.ProfileIcon width={24} height={24} />
          <ReplyComment>{reply.comment}</ReplyComment>
        </Reply>
      ))}
    </ReplyLayout>
  );
};

export default ReplyList;

const ReplyLayout = styled.div``;

const Reply = styled.div`
  display: flex;

  gap: 12px;
  height: 52px;
  padding-left: 42px;
`;

const ReplyComment = styled.div`
  height: 80%;
  padding: 8px 12px;
  background-color: #f0f2f5;
  border-radius: 8px;
`;
