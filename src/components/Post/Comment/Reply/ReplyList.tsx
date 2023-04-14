import * as S from './style';
import ReplyInput from './ReplyInput';
import { ReplyCommentType } from 'types/Comment';
import Reply from './Reply';

interface ReplyListProps {
  commentId: number;
  replies: ReplyCommentType[];
}

const ReplyList = ({ commentId, replies }: ReplyListProps) => {
  return (
    <S.ReplyLayout>
      {replies.map(reply => (
        <Reply key={reply.replyId} {...reply} />
      ))}
      <ReplyInput commentId={commentId} />
    </S.ReplyLayout>
  );
};

export default ReplyList;
