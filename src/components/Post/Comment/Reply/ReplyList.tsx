import styled from '@emotion/styled';
import * as I from 'assets';
import ReplyInput from './ReplyInput';

const ReplyList = ({ commentId, replies }: any) => {
  return (
    <ReplyLayout>
      {replies.map((reply: any) => (
        <Reply key={reply.replyId}>
          <I.ProfileIcon width={24} height={24} />
          <ReplyComment>{reply.comment}</ReplyComment>
        </Reply>
      ))}
      <ReplyInput commentId={commentId} />
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
