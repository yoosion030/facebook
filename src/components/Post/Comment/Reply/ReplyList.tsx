import { ReplyCommentType } from 'types/Comment';
import Reply from './Reply';
import Input from 'components/Input';
import * as S from './style';

interface ReplyListProps {
  commentId: number;
  replies: ReplyCommentType[];
}

const ReplyList = ({ commentId, replies }: ReplyListProps) => {
  return (
    <S.ReplyAnimation>
      {replies.map(reply => (
        <Reply key={reply.replyId} {...reply} commentId={commentId} />
      ))}
      <Input mode='reply' commentId={commentId} />
    </S.ReplyAnimation>
  );
};

export default ReplyList;
