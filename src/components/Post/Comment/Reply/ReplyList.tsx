import { ReplyCommentType } from 'types/Comment';
import Reply from './Reply';
import Input from 'components/Input';

interface ReplyListProps {
  commentId: number;
  replies: ReplyCommentType[];
}

const ReplyList = ({ commentId, replies }: ReplyListProps) => {
  return (
    <>
      {replies.map(reply => (
        <Reply key={reply.replyId} {...reply} />
      ))}
      <Input mode='reply' commentId={commentId} />
    </>
  );
};

export default ReplyList;
