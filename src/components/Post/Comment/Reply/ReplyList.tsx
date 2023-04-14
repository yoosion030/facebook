import * as I from 'assets';
import * as S from './style';
import ReplyInput from './ReplyInput';

const ReplyList = ({ commentId, replies }: any) => {
  return (
    <S.ReplyLayout>
      {replies.map((reply: any) => (
        <S.Reply key={reply.replyId}>
          <I.ProfileIcon width={24} height={24} />
          <S.ReplyComment>{reply.comment}</S.ReplyComment>
        </S.Reply>
      ))}
      <ReplyInput commentId={commentId} />
    </S.ReplyLayout>
  );
};

export default ReplyList;
