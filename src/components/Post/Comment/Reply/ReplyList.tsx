import * as S from './style';
import { ReplyCommentType } from 'types/Comment';
import { Textarea, Reply } from 'components';

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
      <Textarea mode='reply' commentId={commentId} />
    </S.ReplyAnimation>
  );
};

export default ReplyList;
