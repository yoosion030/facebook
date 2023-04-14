import * as I from 'assets';
import * as S from './style';
import { CommentContext } from 'context/CommentProvider';
import { useContext } from 'react';
import ReplyList from './Reply/ReplyList';
import { ReplyCommentType } from 'types/Comment';

interface CommentProps {
  comment: string;
  commentId: number;
  replies?: ReplyCommentType[];
}

const Comment = ({ comment, commentId, replies = [] }: CommentProps) => {
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
            <S.Reply>답글 달기</S.Reply>
            <S.Delete onClick={handleDeleteComment}>삭제</S.Delete>
          </S.CommentAction>
        </div>
      </S.CommentLayout>
      <ReplyList commentId={commentId} replies={replies} />
    </>
  );
};

export default Comment;
