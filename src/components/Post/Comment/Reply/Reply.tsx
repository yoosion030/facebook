import * as I from 'assets';
import * as S from './style';

interface ReplyProps {
  replyId: number;
  comment: string;
}

const Reply = ({ replyId, comment }: ReplyProps) => {
  return (
    <S.Reply key={replyId}>
      <I.ProfileIcon width={24} height={24} />
      <S.ReplyComment>{comment}</S.ReplyComment>
    </S.Reply>
  );
};

export default Reply;
