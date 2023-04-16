import * as I from 'assets';
import * as S from './style';
import { useContext } from 'react';
import { CommentContext } from 'context/CommentProvider';

interface ReplyProps {
  replyId: number;
  comment: string;
  commentId: number;
}

const Reply = ({ replyId, comment, commentId }: ReplyProps) => {
  const { deleteReply } = useContext(CommentContext);
  return (
    <S.Reply>
      <I.ProfileIcon width={24} height={24} />
      <S.ReplyAction>
        <S.ReplyComment>{comment}</S.ReplyComment>
        <S.Delete onClick={() => deleteReply(replyId, commentId)}>삭제</S.Delete>
      </S.ReplyAction>
    </S.Reply>
  );
};

export default Reply;
