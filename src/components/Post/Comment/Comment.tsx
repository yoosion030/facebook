import { useContext, useState } from 'react';
import * as I from 'assets';
import * as S from './style';
import { CommentContext } from 'context/CommentProvider';
import ReplyList from './Reply/ReplyList';
import { ReplyCommentType } from 'types/Comment';

interface CommentProps {
  comment: string;
  commentId: number;
  replies?: ReplyCommentType[];
}

const Comment = ({ comment, commentId, replies = [] }: CommentProps) => {
  const [isShowReply, setIsShowReply] = useState<boolean>(false);
  const { deleteComment } = useContext(CommentContext);
  const handleDeleteComment = () => {
    deleteComment(commentId);
  };

  return (
    <>
      <S.CommentLayout>
        <I.ProfileIcon width={32} height={32} />
        <div>
          <S.ContentSection>{comment}</S.ContentSection>
          <S.CommentAction>
            <S.Reply onClick={() => setIsShowReply(!isShowReply)}>
              {replies.length === 0 ? '답글 달기' : `답글 ${replies.length}개`}
            </S.Reply>
            <S.Delete onClick={handleDeleteComment}>삭제</S.Delete>
          </S.CommentAction>
        </div>
      </S.CommentLayout>
      {isShowReply && <ReplyList commentId={commentId} replies={replies} />}
    </>
  );
};

export default Comment;
